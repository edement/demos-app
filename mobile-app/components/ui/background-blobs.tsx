import { View } from 'react-native';
import Svg, { Defs, Ellipse, FeGaussianBlur, Filter, G, RadialGradient, Stop } from 'react-native-svg';

const C1 = '#B9DAFB';
const C2 = '#9895EE';
const C3 = '#C55492';
const C4 = '#ECACAD';

interface GlowCircleProps {
  id: string;
  size?: number;
  opacity?: number;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

export default function GlowCircle({ id, size = 400, opacity = 0.5, top, bottom, left, right }: GlowCircleProps) {
  const padding = size * 0.5;
  const total = size + padding * 2;
  const cx = total / 2;
  const cy = total / 2;
  const r = size / 2;

  return (
    <View
      style={{
        position: 'absolute',
        width: total,
        height: total,
        top: top !== undefined ? top - padding : undefined,
        bottom: bottom !== undefined ? bottom - padding : undefined,
        left: left !== undefined ? left - padding : undefined,
        right: right !== undefined ? right - padding : undefined,
        zIndex: 0,
      }}
      pointerEvents="none"
    >
      <Svg width={total} height={total} style={{ opacity }}>
        <Defs>
          <Filter id={`${id}-blur`} x="-50%" y="-50%" width="200%" height="200%">
            <FeGaussianBlur stdDeviation="25" />
          </Filter>
          <RadialGradient id={`${id}-g1`} cx="50%" cy="20%" r="55%">
            <Stop offset="0%" stopColor={C1} stopOpacity="1" />
            <Stop offset="100%" stopColor={C1} stopOpacity="0" />
          </RadialGradient>
          <RadialGradient id={`${id}-g2`} cx="80%" cy="50%" r="55%">
            <Stop offset="0%" stopColor={C2} stopOpacity="1" />
            <Stop offset="100%" stopColor={C2} stopOpacity="0" />
          </RadialGradient>
          <RadialGradient id={`${id}-g3`} cx="50%" cy="80%" r="55%">
            <Stop offset="0%" stopColor={C3} stopOpacity="1" />
            <Stop offset="100%" stopColor={C3} stopOpacity="0" />
          </RadialGradient>
          <RadialGradient id={`${id}-g4`} cx="20%" cy="50%" r="55%">
            <Stop offset="0%" stopColor={C4} stopOpacity="1" />
            <Stop offset="100%" stopColor={C4} stopOpacity="0" />
          </RadialGradient>
        </Defs>
        <G filter={`url(#${id}-blur)`}>
          <Ellipse cx={cx} cy={cy} rx={r} ry={r} fill={`url(#${id}-g1)`} />
          <Ellipse cx={cx} cy={cy} rx={r} ry={r} fill={`url(#${id}-g2)`} />
          <Ellipse cx={cx} cy={cy} rx={r} ry={r} fill={`url(#${id}-g3)`} />
          <Ellipse cx={cx} cy={cy} rx={r} ry={r} fill={`url(#${id}-g4)`} />
        </G>
      </Svg>
    </View>
  );
}