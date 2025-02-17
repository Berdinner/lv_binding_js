import { Button, EAlignType, Line, Render, Text, Textarea, View } from "lvgljs-ui";
import React, { useEffect, useState } from "react";

const URL = "https://mastodon.social/api/v1/timelines/public";

const dark = "#000000" as any;
const gray = '#92938d' as any;
const lightGray = '#b5b5a8' as any;
const light = "#e8d6c0" as any;
const highlight = "#a1281c" as any;

const styles = {
  container: { // Main container for all elements.
    'width': 320,
    'height': 240,
    'background-color': light,
    'flex-direction': 'column',
    'padding': 2,
    'display': 'flex',
  },
  section: { // Gray section for titles etc.
    'width': '100%',
    'height': 'auto',
    'background-color': lightGray,
    'border-radius': 0,
    'border-width': 0,
    'padding': 2,
  },
  title: { // Large dark title text.
    'font-size': 32,
    'text-color': dark,
    'width': 310,
    'text-wrap': 1,
  },
  body: { // Body text.
    'font-size': 16,
    'text-color': dark,
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
    'text-color': dark,
  },
  line: { // Thin red line to seperate sections.
    'line-color': highlight
  }
};

function App() {

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>
          UI Styling Test
        </Text>
      </View>
      <Line style={styles.line}  points={[[0,0],[312,0]]}/>
      <Text style={styles.small}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
      <Line style={styles.line}  points={[[0,0],[312,0]]}/>

      <Text style={styles.body}>The quick brown fox jumps over the lazy dog, to which the dog barks and the fox runs away. The fox runs to the forest and the dog follows. The dog is a good dog and the fox is a good fox.</Text>
      <Button style={styles.button} onPressedStyle={styles.buttonPressed}>
        <Text style={styles.buttonText}>button</Text>
      </Button>
    </View>
  );
}
// const style = {
//   view: {
//       'transition-property': 'background-color, border-color, border-width',
//       'transition-duration': '0.1s',
//       'transition-timing-function': 'linear',
//       'transition-delay': '0.2s',
//   },
//   pressedStyle: {
//       'border-width': 6,
//       'border-color': 'red',
//       'background-color': 'red',

//       'transition-property': 'background-color, border-color, border-width',
//       'transition-duration': '0.5s',
//       'transition-timing-function': 'linear',
//       'transition-delay': '0',
//   }
// };

Render.render(<App />);
