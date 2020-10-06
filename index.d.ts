declare type BalloonProps = {
  /**
   *  width of balloon.
   * default: 300
   */
  width?: number;

  /**
   *  height of balloon.
   */
  height?: number;

  /**
   * width of border.
   * default: 1
   */
  borderWidth?: number;

  /**
   * color of border.
   * default: "#ccc"
   */
  borderColor?: string;

  /**
   *  radius of border.
   * default: 10
   */
  borderRadius?: number;

  /**
   * color of background.
   * default: "#fff"
   */
  backgroundColor?: string;

  /**
   * specify the offset of triangle position from top or left as percentage.
   * default: "30%"
   */
  triangleOffset?: string;

  /**
   *specify the triangle direction from top/bottom/left/right.
   * default: "left"
   */
  triangleDirection?: string;

  /**
   * specify the size of triangle.
   * default: 10
   */
  triangleSize?: number;

  /**
   *specify the style of balloon container.
   */
  containerStyle?: object;

  /**
   *triggered on press balloon.
   */
  onPress?: () => void;

  /**
   * triggered on long press balloon.
   */
  onLongPress?: () => void;

  /**
   * content of balloon.
   */
  children?: any;
};

export default function Balloon(props: BalloonProps): null;
