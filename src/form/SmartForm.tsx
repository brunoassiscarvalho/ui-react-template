import React, { ReactElement, ReactFragment, ReactNode } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { SmartFormItem, SmartFormItemProps } from './SmartFormItem';
import { Stack } from '@mui/material';
import { SmartFormGroupProps } from './SmartFormGroup';
import { Controller, Control, FieldValues, FormProvider } from 'react-hook-form';

interface SmartFormProps {
  defaultValues?: any;
  children: ReactNode;
  onSubmit: SubmitHandler<any>;
}

interface SmartFormItemElement extends SmartFormItemProps, ReactElement {}

interface SmartFormGroupElement extends SmartFormGroupProps, ReactElement {}

export default function SmartForm({ defaultValues, children, onSubmit }: SmartFormProps) {
  const methods = useForm();
  const { control, handleSubmit } = methods;

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3}>{FormItemResolver({ control, children })}</Stack>
        </form>
      </FormProvider>
    </>
  );
}

interface FormItemResolverProps {
  children: ReactNode;
  control: Control<FieldValues>;
}

function FormItemResolver({ children, control }: FormItemResolverProps): ReactNode {
  return (
    React.Children.map(children, (child) => {
      if (!React.isValidElement<SmartFormGroupElement>(child)) return <>{child} Not Group </>;
      if (!React.isValidElement<SmartFormItemElement>(child)) return <> {child}not element</>;
      if (child.props.groupName) {
        return child;
      } else if (child.props.name && child.type) {
        return (
          <SmartFormItem {...child.props} control={control} defaultValue="">
            {child}
          </SmartFormItem>
        );
      } else {
        return <>{child}</>;
      }
    }) || <>Adicione campos no formulário</>
  );
}
