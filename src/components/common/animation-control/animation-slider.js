// Copyright (c) 2019 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import React, {Component} from 'react';
import styled from 'styled-components';
import moment from 'moment';
import {requestAnimationFrame, cancelAnimationFrame} from 'global/window';

import Slider from 'components/common/slider/slider';
import {
  WidgetContainer,
  Button,
  ButtonGroup
} from 'components/common/styled-components';
import {Play, Reset, Pause} from 'components/common/icons';
import SpeedControl from './speed-control';
import {BASE_SPEED} from 'constants/default-settings';

const SliderWrapper = styled.div`
  display: flex;
  position: relative;
  flex-grow: 1;
  margin-right: 24px;
  margin-left: 24px;
`;

const StyledControl = styled.div`
  background-color: ${props => props.theme.panelBackground};
`;

const AnimationWidgetInner = styled.div`
  padding: 2px 12px;
  position: relative;
  display: flex;
  align-items: center;
  height: 48px;
`;

const StyledAnimationControls = styled.div`
  display: flex;
  margin-right: 12px;
`;

const IconButton = styled(Button)`
  padding: 6px 4px;
  svg {
    margin: 0 6px;
  }
`;

const StyledDomain = styled.div`
  color: ${props => props.theme.titleTextColor};
  font-weight: 400;
  font-size: 10px;
`;

const TimeDisplay = styled.div`
  height: 64px;
  border-radius: 32px;
  width: 176px;
  bottom: 100%;
  left: calc(50% - 88px);
  background-color: ${props => props.theme.panelBackground};
  color: ${props => props.theme.titleTextColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  opacity: 0.8;

  .animation-control__time-display__top {
    font-size: 12px;
    font-weight: 500;
    color: ${props => props.theme.textColor};
  }

  .animation-control__time-display__bottom {
    color: ${props => props.theme.titleTextColor};
    font-size: 14px;
    font-weight: 500;
  }
`;

const defaultTimeFormat = 'MM/DD/YY hh:mm:ss';

const buttonHeight = '18px';
const AnimationControls = ({
  isAnimating,
  pauseAnimation = () => {},
  updateAnimationTime = () => {},
  startAnimation = () => {}
}) => (
  <StyledAnimationControls>
    <ButtonGroup>
      <IconButton onClick={updateAnimationTime} link>
        <Reset height={buttonHeight} />
      </IconButton>
      <IconButton onClick={isAnimating ? pauseAnimation : startAnimation} link>
        {isAnimating ? (
          <Pause height={buttonHeight} />
        ) : (
          <Play height={buttonHeight} />
        )}
      </IconButton>
    </ButtonGroup>
  </StyledAnimationControls>
);

const AnimationControlFactory = () => {
  class AnimationControl extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isAnimating: false,
        width: 288,
        showSpeedControl: false
      };
      this._animation = null;
    }

    componentDidUpdate() {
      if (!this._animation && this.state.isAnimating) {
        this._animation = requestAnimationFrame(this._nextFrame);
      }
    }

    onSlider1Change = val => {
      const {domain} = this.props.animation;
      if (val >= domain[0] && val <= domain[1]) {
        this.props.updateAnimationTime(val);
      }
    };

    _updateAnimationTime = () => {
      const {domain} = this.props.animation;
      this.props.updateAnimationTime(domain[0]);
      this._startAnimation();
    };

    _startAnimation = () => {
      this._pauseAnimation();
      this.setState({isAnimating: true});
    };

    _nextFrame = () => {
      this._animation = null;
      const {currentTime, domain, speed} = this.props.animation;
      const adjustedSpeed = ((domain[1] - domain[0]) / BASE_SPEED) * speed;
      const nextTime =
        currentTime + speed > domain[1] ? domain[0] : currentTime + adjustedSpeed;
      this.props.updateAnimationTime(nextTime);
    };

    _pauseAnimation = () => {
      if (this._animation) {
        cancelAnimationFrame(this._animation);
        this._animation = null;
      }
      this.setState({isAnimating: false});
    };

    toggleSpeedControl = () => {
      this.setState({showSpeedControl: !this.state.showSpeedControl});
    };

    onChange = () => {
      this.toggleSpeedControl();
    };

    render() {
      const {animation, width} = this.props;
      const {currentTime, domain, speed} = animation;
      const {showSpeedControl} = this.state;
      const displayDateTime = moment.unix(currentTime).format(defaultTimeFormat);
      const [displayDate, displayTime] = displayDateTime.split(' ');

      return (
        <WidgetContainer width={width}>
          <StyledControl>
            <AnimationWidgetInner className="animation-widget--inner">
              <AnimationControls
                className="animation-control-playpause"
                startAnimation={this._startAnimation}
                isAnimating={this.state.isAnimating}
                pauseAnimation={this._pauseAnimation}
                resetAnimation={this._resetAnimation}
              />
              <StyledDomain className="animation-control__time-domain">
                <span>{moment.unix(domain[0]).format(defaultTimeFormat)}</span>
              </StyledDomain>
              <SliderWrapper className="animation-control__slider">
                <Slider
                  showValues={false}
                  isRanged={false}
                  minValue={domain[0]}
                  maxValue={domain[1]}
                  value1={currentTime}
                  onSlider1Change={this.onSlider1Change}
                  enableBarDrag={true}
                />
              </SliderWrapper>
              <StyledDomain className="animation-control__time-domain">
                <span>{moment.unix(domain[1]).format(defaultTimeFormat)}</span>
              </StyledDomain>
              <SpeedControl
                onClick={this.toggleSpeedControl}
                showSpeedControl={showSpeedControl}
                updateAnimationSpeed={this.props.updateAnimationSpeed}
                speed={speed}
              />
            </AnimationWidgetInner>
          </StyledControl>
          <TimeDisplay className="animation-control__time-display">
            <div className="animation-control__time-display__top">{displayDate}</div>
            <div className="animation-control__time-display__bottom">{displayTime}</div>
          </TimeDisplay>
        </WidgetContainer>
      );
    }
  }

  AnimationControl.defaultProps = {
    sliderHandleWidth: 12,
    onChange: () => {}
  };

  return AnimationControl;
};

export default AnimationControlFactory;
