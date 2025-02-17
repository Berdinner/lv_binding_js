import { Button, EAlignType, Line, Render, Text, Textarea, View, Checkbox } from "lvgljs-ui";
import React, { useEffect, useState } from "react";

const URL = "https://mastodon.social/api/v1/timelines/public";

const black = "#000000" as any;
const gray = '#92938d' as any;
const offWhite = "#e8d6c0" as any;
const highlight = "#ff00aa" as any;

const pixel = 4 as any;

const styles = {
  container: { // Main container for all elements.
    'width': 320,
    'height': 240,
    'background-color': offWhite,
    'flex-direction': 'column',
    'padding': 2,
    'display': 'flex',
  },
  section: { // Black section for titles etc.
    'width': '100%',
    'height': 'auto',
    'background-color': black,
    'border-radius': 0,
    'border-width': 0,
    'padding': pixel,
    'display': 'flex',
    'flex-direction': 'column',
  },
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
  small: { // Small gray text.
    'font-size': 12,
    'text-color': gray,
    'width': 310,
    'text-wrap': 1,
  },
  button: { // Red button with square corners.
    'background-color': gray,
    'border-radius': 0, 
    'border-width': 2,
    'border-color': highlight,
    'padding': 4,
    'transition-property': 'background-color, border-color',
    'transition-duration': '10ms',
    'transition-timing-function': 'linear',
    'transition-delay': '0',
  },
  buttonPressed: {
    'background-color': highlight,
    'border-radius': 0, 
    'border-width': 2,
    'border-color': gray,
    'transition-property': 'background-color, border-color',
    'transition-duration': '40ms',
    'transition-timing-function': 'linear',
    'transition-delay': '0',
  },
  buttonText: {
    'text-color': black,
  },
  indicator: {
    'border-color': black,
    'background-color': offWhite,
  },
  indicatorDisabled: {
    'border-color': black,
    'background-color': gray,
  },
  indicatorChecked: {
    'background-image': null,
    'background-color': gray,
  },  
  line: { // Thin red line to seperate sections.
    'line-color': black,
    'line-width': pixel
  }
};

function App() {

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>
          UI STYLING TEST
        </Text>
      </View>
      <Line style={styles.line}  points={[[0,0],[312,0]]}/>
      <Text style={styles.small}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
      <Line style={styles.line}  points={[[0,0],[312,0]]}/>
      <Text style={styles.body}>The quick brown fox jumps over the lazy dog, to which the dog barks and the fox runs away. The fox runs to the forest and the dog follows. The dog is a good dog and the fox is a good fox.</Text>
      <Button style={styles.button} onPressedStyle={styles.buttonPressed}>
        <Text style={styles.buttonText}>button</Text>
      </Button>

      <View style={styles.section}>
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

        <Line style={styles.line}  points={[[0,0],[312,0]]}/>
      <Text style={styles.body}>She sells sea shells by the sea shore. The shells that she sells are sea shells I'm sure. So if she sells sea shells by the sea shore, I'm sure that the shells are sea shore shells.</Text>
      <Line style={styles.line}  points={[[0,0],[312,0]]}/>
    </View>
  );
}

Render.render(<App />);
