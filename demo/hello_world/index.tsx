import { Button, EAlignType, Line, Render, Text, Textarea, View, Checkbox } from "lvgljs-ui";
import React, { useEffect, useState } from "react";

const URL = "https://mastodon.social/api/v1/timelines/public";

const black = "#000000" as any;
const offWhite = "#f0f6f0" as any;
const highlight = "#ff00aa" as any;

const pixel = 4 as any;

const styles = {

  // Containers

  mainContainer: { // Main container for all elements.
    'width': 320,
    'height': 240,
    'background-color': offWhite,
    'flex-direction': 'column',
    'padding': 0,
    'border-radius': 0,
    'border-width': 0,
    'display': 'flex',
  },
  blackBox: { // Black section for titles etc.
    'width': '100%',
    'height': 'auto',
    'background-color': black,
    'border-radius': 0,
    'border-width': 0,
    'padding': pixel,
    'display': 'flex',
    'flex-direction': 'column',
  },
  whiteBox: { // White section, fits inside blackBox.
    'width': '48%',
    'height': 'auto',
    'background-color': offWhite,
    'border-radius': 0,
    'border-width': 0,
    'padding': pixel,
    'display': 'flex', 
    'flex-direction': 'column', 
  },

  // Text

  title: { // Large title text.
    'font-size': 32,
    'text-color': offWhite,
    'width': 300,
    'text-wrap': 1,
    'text-align': 'center',
  },
  body: { // Body text.
    'font-size': 16,
    'text-color': black,
    'width': 310,
    'text-wrap': 1,
  },
  small: { // Small text.
    'font-size': 12,
    'text-color': black,
    'width': 310,
    'text-wrap': 1,
  },

  // Buttons

  button: { // Red button with square corners.
    'background-color': black,
    'border-radius': 0, 
    'border-width': 0,
    'padding': pixel,
    'transition-property': 'background-color',
    'transition-duration': '10ms',
    'transition-timing-function': 'linear',
    'transition-delay': '0',
  },
  buttonPressed: {
    'background-color': highlight,
    'border-radius': 0, 
    'border-width': 0,
    'transition-property': 'background-color',
    'transition-duration': '40ms',
    'transition-timing-function': 'linear',
    'transition-delay': '0',
  },
  buttonText: {
    'text-color': offWhite,
  },

  // Checkboxes

  indicator: {
    'border-color': black,
    'background-color': offWhite,
  },
  indicatorDisabled: {
    'border-color': black,
    'background-color': offWhite,
  },
  indicatorChecked: {
    'background-image': null,
    'background-color': highlight,
  }, 
  indicatorText: {
    'text-color': offWhite,
  },

  // Lines

  whiteLine: { // Thin white line to seperate sections.
    'line-color': offWhite,
    'line-width': pixel
  },
  blackLine: { // Thin black line to seperate sections.
    'line-color': black,
    'line-width': pixel
  }
};

function App() {

  return (
    <View style={styles.mainContainer}>
      <View style={styles.blackBox}>
        <Text style={styles.title}>
          UI STYLING TEST
        </Text>
      </View>
      <Line style={styles.blackLine}  points={[[0,0],[320,0]]}/>
      <Text style={[styles.small, { 'padding-left': pixel }]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
      <Line style={styles.blackLine}  points={[[0,0],[320,0]]}/>
      <View style={[styles.blackBox, { 'flex-direction': 'row' }]}>
        <View style={styles.whiteBox}>
          <Text style={[styles.body, { 'text-align': 'justify', 'width': '100%' }]}>
            Text for the left-hand side!
          </Text>
        </View>
        <View style={styles.whiteBox}>
          <Text style={[styles.body, { 'text-align': 'justify', 'width': '100%' }]}>
            Text for the right-hand side!
          </Text>
        </View>
      </View>
      <Line style={styles.blackLine}  points={[[0,0],[320,0]]}/>
      <Text style={[styles.body, { 'padding-left': pixel }]}>The quick brown fox jumps over the lazy dog, to which the dog barks and the fox runs away. The fox runs to the forest and the dog follows. The dog is a good dog and the fox is a good fox.</Text>
      <Button style={styles.button} onPressedStyle={styles.buttonPressed}>
        <Text style={styles.buttonText}>PRESS ME</Text>
      </Button>

      <View style={styles.blackBox}>
            <Checkbox
                checked={false}
                text="Apple"
                indicatorStyle={styles.indicator}
                indicatorCheckedStyle={styles.indicatorChecked}
            />
            <Checkbox
                checked={false}
                text="Banana"
                indicatorStyle={styles.indicator}
                indicatorCheckedStyle={styles.indicatorChecked}
            />
            <Checkbox
                checked={false}
                disabled={true}
                text="Disabled"
                indicatorStyle={styles.indicatorDisabled}
                indicatorCheckedStyle={styles.indicatorChecked}
            />
        </View>

      <Line style={styles.blackLine}  points={[[0,0],[320,0]]}/>
      <Text style={styles.body}>She sells sea shells by the sea shore. The shells that she sells are sea shells I'm sure. So if she sells sea shells by the sea shore, I'm sure that the shells are sea shore shells.</Text>
      <Line style={styles.blackLine}  points={[[0,0],[320,0]]}/>
    </View>
  );
}

Render.render(<App />);
