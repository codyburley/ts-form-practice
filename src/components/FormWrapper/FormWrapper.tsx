import { ReactNode } from "react";
import "./FormWrapper.scss";

type FormWrapperProps = {
  title: string;
  children: ReactNode;
};

const FormWrapper = ({ title, children }: FormWrapperProps) => {
  return (
    <>
      <h2 className="formwrapper__title">{title}</h2>
      <div className="formwrapper__children">{children}</div>
    </>
  );
};

export default FormWrapper;
