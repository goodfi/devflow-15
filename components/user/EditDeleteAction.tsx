"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "@/hooks/use-toast";
import { deleteQuestionbyId } from "@/lib/actions/question.action";

interface Props {
  type: "Question" | "Answer" | "Comment";
  itemId: string;
}

const EditDeleteAction = ({ type, itemId }: Props) => {
  const router = useRouter();

  const handleEdit = async () => {
    router.push(`/question/${itemId}/edit`);
  };
  const handleDelete = async () => {
    if (type === "Question") {
      await deleteQuestionbyId({ questionId: itemId });

      router.refresh();

      toast({
        title: "Question deleted",
        description: "Your question has been deleted successfully.",
      });
    } else if (type === "Answer") {
      toast({
        title: "Answer deleted",
        description: "Your answer has been deleted successfully.",
      });
    }
  };
  return (
    <div className="flex items-center justify-end gap-3 max-sm:w-full">
      {type === "Question" && (
        <Image
          src={"/icons/edit.svg"}
          alt="edit"
          width={14}
          height={14}
          className="cursor-pointer object-contain"
          onClick={handleEdit}
        />
      )}
      <AlertDialog>
        <AlertDialogTrigger className="cursor-pointer">
          <Image
            src={"/icons/trash.svg"}
            alt="trash"
            width={14}
            height={14}
            className="cursor-pointer object-contain"
          />
        </AlertDialogTrigger>
        <AlertDialogContent className="background-light800_dark300">
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              {type === "Question"
                ? " question"
                : type === "Answer"
                  ? " answer"
                  : " comment"}
              . and remove it from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="btn">Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="!border-primary-500 !bg-primary-500 !text-light-800"
              onClick={handleDelete}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default EditDeleteAction;
