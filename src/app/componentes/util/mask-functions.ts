export const formatar = (formato: string, valor: string) => {
  let retorno = '';
  let j = 0;
  for (let i = 0; i < formato.length && j < valor.length; i++) {
    if (formato.substring(i, i + 1) === '9') {
      retorno += valor.substring(j, j + 1);
      j++;
    } else {
      retorno += formato.substring(i, i + 1);
    }
  }
  return retorno;
};

export const maskModels = [
  {code: 'CPF', mask: '999.999.999-99'},
  {code: 'CNPJ', mask: '99.999.999/9999-99'},
  {code: 'TEL', mask: '(99) 9 9999-9999'},
  {code: 'CEP', mask: '99.999-999'},
  {code: 'IE', mask: '99.999999'}
];

export interface MaskModel {
  code: string;
  mask: string;
}
