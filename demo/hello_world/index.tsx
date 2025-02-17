import { Button, EAlignType, Line, Render, Text, Textarea, View } from "lvgljs-ui";
import React, { useEffect, useState } from "react";

const URL = "https://mastodon.social/api/v1/timelines/public";

const dark = "#000000" as any;
const gray = '#92938d' as any;
const light = "#e8d6c0" as any;
const highlight = "#a1281c" as any;

const styles = {
  container: {
    'width': 320,
    'height': 240,
    'background-color': light,
    'flex-direction': 'column',
    'padding': 2,
    'gap': 10,
    'display': 'flex',
    'align-items': 'flex-start',
  },
  section: {
    'width': '100%',
    'height': 'auto',
    'background-color': gray,
    'border-radius': 0,
    'border-width': 0,
    'padding': 2,
  },
  title: {
    'font-size': 32,
    'text-color': dark,
    'border-radius': 5,
    'border-width': 2,
    'border-color': gray,
    'background-color': highlight,
  },
  body: {
    'font-size': 16,
    'text-color': dark,
  },
  small: {
    'font-size': 12,
    'text-color': gray,
  },
  button: {
    'background-color': highlight,
    'border-radius': 0,
    'border-width': 0,
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
      <Text style={styles.small}>Small Text</Text>
      <Text style={styles.body}>Body Text</Text>
      <Button style={styles.button}>This is a button</Button>
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
