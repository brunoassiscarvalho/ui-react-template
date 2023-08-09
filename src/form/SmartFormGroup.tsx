// import { Button } from '@mui/material';
// import React from 'react';
// import { FormProvider, useForm, useFormContext, SubmitHandler } from 'react-hook-form';
// import InputText from './inputs/InputText';
// import { SmartFormItem } from './SmartFormItem';

// export const ConnectForm = ({ children }: any) => {
//   const methods = useFormContext();

//   return children({ ...methods });
// };

// export const DeepNest = ({ children }: any) => (
//   <ConnectForm>
//     {(props: any) => (
//       <SmartFormItem {...props} name="testeNestedInput.nested">
//         {children}
//       </SmartFormItem>
//     )}
//   </ConnectForm>
// );

// const SmartFormGroup = () => {
//   const methods = useForm();

//   const onSubmit: SubmitHandler<any> = (data: any) => {
//     console.log(data);
//   };

//   return (
//     <FormProvider {...methods}>
//       <form onSubmit={methods.handleSubmit(onSubmit)}>
//         <DeepNest>
//           <InputText />
//         </DeepNest>
//         <Button type="submit">Teste Grupo</Button>
//       </form>
//     </FormProvider>
//   );
// };

// export default SmartFormGroup;

import { Divider, Stack } from '@mui/material';
import React, { ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';
import { SmartFormItem, SmartFormItemProps } from './SmartFormItem';

export interface SmartFormGroupProps {
  groupName: string;
  children: ReactNode;
}

export const ConnectForm = ({ children }: any) => {
  const methods = useFormContext();

  return children({ ...methods });
};

export const DeepNest = ({ children, name }: any) => (
  <ConnectForm>
    {(props: any) => (
      <SmartFormItem {...props} name={name}>
        {children}
      </SmartFormItem>
    )}
  </ConnectForm>
);

export default function SmartFormGroup({ groupName, children }: SmartFormGroupProps) {
  return (
    <Stack>
      <Divider>{groupName}</Divider>
      <>
        {React.Children.map(children, (child) => {
          if (!React.isValidElement<SmartFormItemProps>(child)) return <> {child}</>;
          return child.props.name ? <DeepNest name={`${groupName}.${child.props.name}`}>{child}</DeepNest> : child;
        })}
      </>
    </Stack>
  );
}
