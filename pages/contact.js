import Layout from "../components/Layout";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const Form = styled.form`
  display: grid;
  gap: 20px;
`;

const Input = styled.input`
  border: none;
  padding: 8px;
  border-radius: 4px;
  transition: all 0.1s;
  &:focus {
    outline: 3px solid rgba(0, 180, 216, 0.8);
    background-color: #eee;
  }
`;

const Select = styled.select`
  border: none;
  padding: 8px;
  border-radius: 4px;
  transition: all 0.1s;
  &:focus {
    outline: 3px solid rgba(0, 180, 216, 0.8);
    background-color: #eee;
  }
`;

const Error = styled.span`
  color: red;
`;

export default () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); //göndereceğimiz fonksiyonu gördermeden önce işlemek için kullanırız
  const onSubmit = (data) => {
    console.log("data", data);
  };
  return (
    <Layout title="İletişim">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="fname">Ad Soyad</label>
        <Input
          {...register("firstName", { required: "İsim zorunludur" })}
          type="text"
          id="fname"
          autoComplete="off"
        />
        {errors.firstName && <Error>{errors.firstName.message}</Error>}

        <label htmlFor="source">Bizi nereden buldunuz?</label>
        <Select id="source" name="source" {...register("source")}>
          <option value="net">İnternet</option>
          <option value="adv">Reklam</option>
          <option value="tv">TV</option>
        </Select>

        <input type="submit" />
      </Form>
    </Layout>
  );
};

{
  /*autoComplete="off" =  önerilerin çıkmasını engeller */
  /*readOnly = inputa verdiğimiz value değerini okunabilir yapar inputa değer girdirmez*/
}
