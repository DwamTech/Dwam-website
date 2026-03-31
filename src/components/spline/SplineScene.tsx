import Spline from '@splinetool/react-spline/next';
import styles from './SplineScene.module.css';

interface SplineSceneProps {
  scene?: string;
  className?: string;
}

const DEFAULT_SCENE = 'https://prod.spline.design/AZKtIJgbI3wnee-5/scene.splinecode';

export default function SplineScene({ scene = DEFAULT_SCENE, className }: SplineSceneProps) {
  const containerClassName = className
    ? `${styles.splineScene} ${className}`
    : styles.splineScene;

  return (
    <div className={containerClassName}>
      <Spline scene={scene} renderOnDemand={false} />
    </div>
  );
}
