# react-native-balloon

An UI component to draw balloons.  
![balloon_example](https://user-images.githubusercontent.com/7026785/36620231-6514b930-1935-11e8-84e2-79a25e44f25a.png)


## Install

```
npm install react-native-balloon
```

## Usage

```js
import Balloon from "react-native-balloon";


<Balloon
  borderColor="#2E86C1"
  backgroundColor="#D6EAF8"
  borderWidth={2}
  borderRadius={20}
  triangleSize={15}
  onPress={() => console.log("press")}
>
  <Text>Hello world</Text>
</Balloon>
```


## Properties

| Prop | Default | Type | Description |
|---|---|---| ---|
|**`width`**| `300` | `number`|width of balloon|
|**`height`**| none | `number`|height of balloon|
|**`borderColor`**| `#CCC` | `string`|color of border|
|**`borderWidth`**| `1` | `number`|width of border|
|**`borderRadius`**| `10` | `number`|radius of border|
|**`backgroundColor`**| `#FFF` | `string`|color of background|
|**`triangleOffset`**| `30%` | `string`|specify the offset of triangle position from top or left as percentage. |
|**`triangleDirection`**| `left` | `string`|specify the triangle direction from `top`/`bottom`/`left`/`right`.  |
|**`triangleSize`**| `10` | `number`|specify the size of triangle|
|**`containerStyle`**| none | `object`|specify the style of balloon container. |
|**`onPress`**| none | `function`|triggered on press balloon.|
|**`onLongPress`**| none | `function`|triggered on long press balloon.|



## License

[MIT License](http://opensource.org/licenses/mit-license.html).
