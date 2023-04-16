import Button from "@components/button";
import Input from "@components/input";
import Layout from "@components/layout";
import { NextPage } from "next";
import { useForm } from "react-hook-form";

interface AccountForm {
  name: string;
  email: string;
}

const CreateAccount: NextPage = () => {
  const { register, handleSubmit } = useForm<AccountForm>();

  const onValid = (data: AccountForm) => {
    fetch("/api/users/create", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  return (
    <Layout title="Create Account" hasTabBar>
      <form
        onSubmit={handleSubmit(onValid)}
        className="flex flex-col space-y-2"
      >
        <Input
          register={register("name")}
          name="name"
          type="text"
          label="Name"
          placeholder="Name"
          required
        />
        <Input
          register={register("email")}
          name="email"
          type="email"
          label="Email"
          placeholder="Email"
          required
        />
        <Button text="Create Account" />
      </form>
    </Layout>
  );
};

export default CreateAccount;
