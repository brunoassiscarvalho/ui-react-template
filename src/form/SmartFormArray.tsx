import * as React from 'react';
import { Divider, Stack } from '@mui/material';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { DeepNest } from './SmartFormGroup';
import { SmartFormItemProps } from './SmartFormItem';
import Button from '../molecules/Button';

export default function SmartFormArray({ children, arrayName , label}: any) {
  const { control } = useFormContext();
  const { fields, append } = useFieldArray({
    control,
    name: arrayName,
  });

  return (
    <Stack spacing={3}>
          <Divider>{label}</Divider>
      {fields.map((field, index) => (       
          <>
            {React.Children.map(children, (child) => {
              if (!React.isValidElement<SmartFormItemProps>(child)) return <> {child}</>;
              return child.props.name ? (
                <DeepNest name={`${arrayName}.[${index}].${child.props.name}`}>{child}</DeepNest>
              ) : (
                child
              );
            })}
          </>        
      ))}
      <Button
        type="button"
        onClick={() => {
          append({});
        }}
      >
        append
      </Button>
      </Stack>
  );
}
