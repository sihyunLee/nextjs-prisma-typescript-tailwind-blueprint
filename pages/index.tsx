import type { NextPage } from "next";
import Item from "@components/item";
import Layout from "@components/layout";
import Button from "@components/button";
import Input from "@components/input";
import { useForm } from "react-hook-form";

interface TextForm {
  text?: string;
}

const Home: NextPage = () => {
  const { register, handleSubmit } = useForm<TextForm>();
  const onValid = (data: TextForm) => {
    console.log(data);
  };
  return (
    <Layout title="Home" hasTabBar>
      <div className="flex flex-col space-y-5 divide-y w-full">
        <form onSubmit={handleSubmit(onValid)} className="flex p-2">
          <div className=" w-14 h-14 mx-2 rounded-full bg-slate-400" />
          <div className="flex flex-col ">
            <div className="mt-2">
              <Input
                register={register("text")}
                name="text"
                type="text"
                label=""
                placeholder="What's happening?"
                required
              />
            </div>
            <div className=" w-20 mt-4 flex self-end">
              <Button text="Tweet" />
            </div>
          </div>
        </form>
        {[1, 1].map((_, i) => (
          <Item
            id={i}
            key={i}
            title="iPhone 14"
            price={99}
            comments={1}
            hearts={1}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
