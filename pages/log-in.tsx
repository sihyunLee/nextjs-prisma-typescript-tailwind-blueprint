import Button from "@components/button";
import Input from "@components/input";
import Layout from "@components/layout";
import { NextPage } from "next";
import Link from "next/link";
import { useForm } from "react-hook-form";

interface LoginForm {
  email: string;
}

const Login: NextPage = () => {
  const { register, handleSubmit } = useForm<LoginForm>();

  const onValid = (data: LoginForm) => {
    console.log(data);
  };
  return (
    <Layout title="Login" hasTabBar>
      <form
        onSubmit={handleSubmit(onValid)}
        className="flex flex-col space-y-2"
      >
        <Input
          register={register("email")}
          name="email"
          type="email"
          label="Email"
          placeholder="Email"
          required
        />
        <Button text="Login" />
      </form>
      <div className="mt-2">
        <Link href="/create-account">
          <a>
            <Button text="Create Account" />
          </a>
        </Link>
      </div>
    </Layout>
  );
};

export default Login;
