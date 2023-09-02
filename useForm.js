
// hook utilizado para manejar el estado y los cambios de un formulario en un componente
// Proporciona una forma limpia y reutilizable de manejar el estado del formulario y los cambios en los campos de entrada. Podrías usarlo en 
//cualquier componente que necesite manejar un formulario, pasándolo como parámetro al estado inicial del formulario 
//y luego utilizando formState y onInputChange como corresponda en ese componente.

import { useState } from "react";

export const useForm = ( initialForm = {} ) => {   //<--initialForm: Acepta un objeto como parámetro inicial que representa el estado inicial del formulario. Si no se proporciona, se utilizará un objeto vacío.
  
    const [ formState, setFormState ] = useState( initialForm );
    
      const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
          ...formState,
          [name]: value,
        });
      };

      const onResetForm = () => {
        setFormState(initialForm);
      }
    

    return {
        ...formState, //Permite desestructurar los necesario en el formState del componente
        formState,
        onInputChange,
        onResetForm,
    }

}
