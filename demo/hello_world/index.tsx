import { Button, EAlignType, Line, Render, Text, Textarea, View, Checkbox, Image } from "lvgljs-ui";
import React, { useEffect, useState } from "react";

const URL = "https://mastodon.social/api/v1/timelines/public";

const BORDER = "./border.png" as any;

const BLACK = "#000000" as any;
const WHITE = "#f0f6f0" as any;
const HIGHLIGHT = "#ff00aa" as any;

const PIXEL = 4 as any;

const LINE = [[0,0],[320,0]] as any;

const STYLES = {

  // Containers

  mainContainer: { // Main container for all elements.
    'width': 320,
    'height': 240,
    'background-color': WHITE,
    'flex-direction': 'column',
    'padding': 0,
    'border-radius': 0,
    'border-width': 0,
    'display': 'flex',
  },
  blackBox: { // Black section for titles etc.
    'width': '100%',
    'height': 'auto',
    'background-color': BLACK,
    'border-radius': 0,
    'border-width': 0,
    'padding': PIXEL,
    'display': 'flex',
    'flex-direction': 'row',
    'flex-wrap': 'wrap',
    'gap': PIXEL,
    'justify-content': 'space-between',
  },
  blackBoxColumn: { // Black section with a column layout.
    'width': '100%',
    'height': 'auto',
    'background-color': BLACK,
    'border-radius': 0,
    'border-width': 0,
    'padding': PIXEL,
    'display': 'flex',
    'flex-direction': 'column',
  },
  whiteBox: { // White section, fits inside blackBox.
    'flex-grow': 1,
    'flex-basis': 0,
    'flex-shrink': 1,
    'height': 'auto',
    'background-color': WHITE,
    'border-radius': 0,
    'border-width': 0,
    'padding': PIXEL,
    'display': 'flex', 
    'flex-direction': 'column',
  },
  blankContainer: { // Invisible container for text not already in a container with pixel padding on left-hand side.
    'padding-left': PIXEL,
    'padding-right': 0,
    'padding-top': 0, 
    'padding-bottom': 0,
    'width': '100%',
    'height': 'auto',
    'border-width': 0,
    'border-radius': 0,
    'background-color': WHITE,
  },

  // Text

  title: { // Large title text.
    'font-size': 32,
    'text-color': WHITE,
    'width': '100%',
    'text-wrap': 1,
    'text-align': 'center',
  },
  body: { // Body text.
    'font-size': 16,
    'text-color': BLACK,
    'width': '100%',
    'text-wrap': 1,
    'text-align': 'justify', 
  },
  small: { // Small text.
    'font-size': 12,
    'text-color': BLACK,
    'width': '100%',
    'text-wrap': 1,
  },

  // Buttons

  button: { // Red button with square corners.
    'background-color': BLACK,
    'border-radius': 0, 
    'border-width': 0,
    'padding': PIXEL,
    'transition-property': 'background-color',
    'transition-duration': '10ms',
    'transition-timing-function': 'linear',
    'transition-delay': '0',
  },
  buttonPressed: {
    'background-color': HIGHLIGHT,
    'border-radius': 0, 
    'border-width': 0,
    'transition-property': 'background-color',
    'transition-duration': '40ms',
    'transition-timing-function': 'linear',
    'transition-delay': '0',
  },
  buttonText: {
    'text-color': WHITE,
  },

  // Checkboxes

  checkbox: {  // Main checkbox container style
    'text-color': WHITE,  // This will affect the label text
    'font-size': 14,
  },
  indicator: {
    'border-color': BLACK,
    'background-color': WHITE,
  },
  indicatorDisabled: {
    'border-color': BLACK,
    'background-color': WHITE,
  },
  indicatorChecked: {
    'background-image': null,
    'background-color': HIGHLIGHT,
  },

  // Lines

  whiteLine: { // Thin white line to seperate sections.
    'line-color': WHITE,
    'line-width': PIXEL
  },
  blackLine: { // Thin BLACK line to seperate sections.
    'line-color': BLACK,
    'line-width': PIXEL
  }
};

function App() {

  return (
    <View style={STYLES.mainContainer}>

      <View style={STYLES.blackBox}>
        <Text style={STYLES.title}>
          UI STYLING TEST
        </Text>
      </View>

      <View style={STYLES.blackBox}>
        <View style={STYLES.whiteBox}>
          <Image 
            src={'./border.png'}
            style={{
              width: 'auto',  // or specific pixel value
              height: 'auto'  // or specific pixel value
            }}
          />
        </View>
      </View>

      <Line style={STYLES.blackLine} points={LINE}/>

      <View style={STYLES.blankContainer}> 
        <Text style={[STYLES.small]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
      </View>

      <Line style={STYLES.blackLine} points={LINE}/>

      <View style={[STYLES.blackBox]}>
        <View style={STYLES.whiteBox}>
          <Text style={[STYLES.body]}>
            Text for the left-hand side!
          </Text>
        </View>
        <View style={STYLES.whiteBox}>
          <Text style={[STYLES.body]}>
            Text for the right-hand side!
          </Text>
        </View>
      </View>

      <Line style={STYLES.blackLine} points={LINE}/>

      <View style={[STYLES.blackBox]}>
        <View style={STYLES.whiteBox}>
          <Text style={[STYLES.body]}>
            Text for the left!
          </Text>
        </View>
        <View style={STYLES.whiteBox}>
          <Text style={[STYLES.body]}>
            Text for the mid!
          </Text>
        </View>
        <View style={STYLES.whiteBox}>
          <Text style={[STYLES.body]}>
            Text for the right!
          </Text>
        </View>
      </View>

      <Line style={STYLES.blackLine} points={LINE}/>

      <View style={STYLES.blankContainer}>
        <Text style={[STYLES.body]}>The quick brown fox jumps over the lazy dog, to which the dog barks and the fox runs away. The fox runs to the forest and the dog follows. The dog is a good dog and the fox is a good fox.</Text>
      </View>
      
      <View style={STYLES.blankContainer}>
        <Button style={STYLES.button} onPressedStyle={STYLES.buttonPressed}>
          <Text style={STYLES.buttonText}>PRESS ME</Text>
        </Button>
      </View>

    <View style={STYLES.blackBoxColumn}>
      <Checkbox
        checked={false}
        text="BEN"
        style={STYLES.checkbox}
        indicatorStyle={STYLES.indicator}
        indicatorCheckedStyle={STYLES.indicatorChecked}
      />
      <Checkbox
        checked={false}
        text="ZUNI"
        style={STYLES.checkbox}
        indicatorStyle={STYLES.indicator}
        indicatorCheckedStyle={STYLES.indicatorChecked}
      />
      <Checkbox
        checked={false}
        disabled={true}
        text="BAXTER"
        style={STYLES.checkbox}
        indicatorStyle={STYLES.indicatorDisabled}
        indicatorCheckedStyle={STYLES.indicatorChecked}
      />
    </View>

      <Line style={STYLES.blackLine} points={LINE}/>

      <View style={STYLES.blankContainer}>
        <Text style={[STYLES.body]}>She sells sea shells by the sea shore. The shells that she sells are sea shells I'm sure. So if she sells sea shells by the sea shore, I'm sure that the shells are sea shore shells.</Text>
      </View>
      
      <Line style={STYLES.blackLine} points={LINE}/>
    </View>
  );
}

Render.render(<App />);
