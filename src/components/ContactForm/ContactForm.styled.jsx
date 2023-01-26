import styled from '@emotion/styled'

export const Form = styled.form`
  width: 350px;
  list-style: none;
  border: 1px solid #000000;
  border-radius: 5px;
`
export const FormTitle = styled.label`
  display: block;
  margin-left: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
`

export const Input = styled.input`
  width: 180px;
  margin-left: 10px;
  margin-bottom: 10px;

  :hover :focus {
    outline: blue;
  }
`

export const FormBtn = styled.button`
  display: block;
  margin-left: 10px;
  margin-bottom: 10px;
  background-color: #ffffff;
  border: 1px solid #414040;
  cursor: pointer;
  border-radius: 5px;

  :hover {
    border-color: #3838f6;
    background-color: #3838f6;
    color: #ffffff;
  }

`
