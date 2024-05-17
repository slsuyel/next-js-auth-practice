import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      {session?.user && (
        <>
          <h1 className="text-4xl text-center mt-10">
            Welcome To {session?.user?.name}
          </h1>
          <h1 className="text-4xl text-center mt-10">
            Welcome To {session?.user?.email}
          </h1>
          <Image
            src={
              session?.user?.image ||
              "https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
            }
            className="mx-auto rounded-full mt-4"
            alt=""
            width={100}
            height={100}
          />
        </>
      )}
    </div>
  );
};

export default DashboardPage;
