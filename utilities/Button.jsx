import Link from "next/link";
import styles from "../styles/button.module.scss";

const Button = ({ variant, route, text, ...props }) => {
  return (
    <Link href={route}>
      <a
        className={styles.button}
        style={{
          backgroundColor: variant === "filled" ? "#634AC9" : "#fff",
          border:
            variant === "filled"
              ? "3px solid transparent"
              : "3px solid #634AC9",
          color: variant === "filled" ? "#fff" : "#634AC9",
        }}
        {...props}
      >
        {text}
      </a>
    </Link>
  );
};

export const ButtonPrimary = (props) => {
  return <Button {...props} variant="filled" />;
};

export const ButtonSecondary = (props) => {
  return <Button {...props} />;
};
