import styles from "./container.module.scss";

interface Props {
  children: React.ReactNode;
  className?: string;
}
const Container: React.FC<Props> = ({ children, className }) => {
  let containerClassName = "";

  if (className) {
    containerClassName += ` ${className}`;
  }

  return (
    <div className={`${styles.container} ${containerClassName}`}>
      {children}
    </div>
  );
};

export default Container;
