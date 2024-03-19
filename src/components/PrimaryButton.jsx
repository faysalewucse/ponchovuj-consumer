import { Button } from "keep-react";

const PrimaryButton = ({ label, loading, size = "sm" }) => {
  return (
    <Button className="bg-primary w-full rounded" size={size}>
      {loading ? (
        <div>
          <span className="pr-2">
            <Spinner color="white" size={"md"} />
          </span>
          Please wait...
        </div>
      ) : (
        <span>{label}</span>
      )}
    </Button>
  );
};

export default PrimaryButton;
