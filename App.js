import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Video from 'react-native-video';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Self Hosted</Text>
      <Video
        source={{
          uri: 'https://dev-hwtest.obs.ap-southeast-3.myhuaweicloud.com/test/docker720.mp4',
        }}
        ref={ref => {}} // Store reference
        style={styles.backgroundVideo}
        resizeMode={'contain'}
        controls={true}
      />
      <Text style={styles.textTitle}>Huawei OBS</Text>
      <Video
        source={{
          uri: 'http://159.138.85.77:1050/videos',
        }}
        ref={ref => {}} // Store reference
        style={styles.backgroundVideo}
        resizeMode={'contain'}
        controls={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  backgroundVideo: {
    width: null,
    height: 300,
    backgroundColor: 'black',
    marginBottom: 24,
  },
  textTitle: {
    fontSize: 16,
    marginBottom: 16,
    alignSelf: 'center',
    color: 'black',
  },
});
