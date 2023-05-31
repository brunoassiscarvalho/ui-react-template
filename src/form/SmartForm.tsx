import React, { ReactElement, ReactFragment } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { SmartFormItem } from './SmartFormItem';

interface SmartFormProps {
  defaultValues?: any;
  children: ReactFragment;
  onSubmit: SubmitHandler<any>;
}

interface SmartFormItemElement extends ReactElement {
  name: string;
}

export default function SmartForm({ defaultValues, children, onSubmit }: SmartFormProps) {
  const { control, register, getValues, reset, setValue, handleSubmit } = useForm<any>();
  // const methods = useForm({ defaultValues });
  // const { handleSubmit } = methods;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement<SmartFormItemElement>(child)) return child;
        return child.props.name && child.type ? (
          <SmartFormItem control={control} defaultValue="" name={child.props.name}>
            {child}
          </SmartFormItem>
        ) : (
          <>
            avulso <>{child}</>
          </>
        );
      })}
    </form>
  );
}
