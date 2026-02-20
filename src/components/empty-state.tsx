import Image from "next/image";

interface Props {
  title: string;
  desciption: string;
}

export const EmptyState = ({ title, desciption }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center">
        <Image src='/empty.svg' width={240} height={240} alt="logo" />
        <div className="flex flex-col gap-y-6 max-w-md mx-auto text-center">
          <h6 className="text-lg font-medium">{title}</h6>
          <p className="text-sm ">{desciption}</p>
      </div>
    </div>
  );
};
