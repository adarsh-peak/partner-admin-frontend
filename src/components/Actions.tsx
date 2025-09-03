import { IconButton } from "@mui/material";
import downloadIcon from "../assets/download.svg";
import viewIcon from "../assets/view.svg";

type Props = {
  id: string;
  row: object;
  handleViewClick: (id: string, row: object) => void;
};

const Actions = ({
  id,
  row,
  handleViewClick
}: Props) => {
  return (
    <div className="flex">
      <span className="mr-2">
        <IconButton onClick={() => handleViewClick(id, row)}>
          <img src={viewIcon} alt="" width="20" />
        </IconButton>
      </span>

      <IconButton>
        <img src={downloadIcon} alt="" width="20" />
      </IconButton>
    </div>
  );
};

export default Actions;
