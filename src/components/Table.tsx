import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import emptyBox from "../assets/animations/emptyBox.json";
import LottieAnimation from "./LottieAnimation";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.background.white,
    color: theme.palette.common.primary,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.background.lightBlue,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

type Props = {
  headings: { id: string; name: string }[];
  rows: object[];
  emptyText?: string;
  id?: string | number;
  rowId?: string | number;
  topHeadings?: object[];
};

export default function CustomizedTables({
  headings,
  rows,
  emptyText = "No data found!",
  id = "",
  rowId = "name",
  topHeadings = null,
}: Props) {
  return (
    <>
      <TableContainer component={Paper} classes={{ root: "h-full" }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            {Boolean(topHeadings) && (
              <TableRow>
                {topHeadings?.map((item) => (
                  <StyledTableCell
                    key={`${id}-${item?.id}`}
                    colSpan={item?.colSpan}
                    sx={{
                      position: "sticky",
                      top: 0,
                      backgroundColor: "white", // must set background!
                      zIndex: 1,
                    }}
                  >
                    <p
                      className={`font-medium text-base text-${
                        item?.align || "left"
                      }`}
                    >
                      {item?.name}
                    </p>
                  </StyledTableCell>
                ))}
              </TableRow>
            )}
            <TableRow>
              {headings?.map((item, index) => (
                <StyledTableCell
                  key={`${id}-${item?.id}`}
                  sx={{
                    position: "sticky",
                    top: 0,
                    backgroundColor: "white",
                    zIndex: 1,
                  }}
                >
                  <p
                    className={`font-medium text-base text-${
                      item?.align || "left"
                    }`}
                  >
                    {item?.name}
                  </p>
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody className="overflow-scroll">
            {rows.map((row) => (
              <StyledTableRow key={row?.[rowId]}>
                {headings?.map((item, index) => (
                  <StyledTableCell
                    component="th"
                    scope="row"
                    key={`${id}-${item?.id}`}
                  >
                    {item?.renderer
                      ? item?.renderer(row?.[item?.id], row)
                      : row?.[item?.id] || "-"}
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {rows?.length === 0 && headings?.length > 0 && (
        <div className="w-full h-full flex flex-col justify-center items-center ">
          <LottieAnimation animationData={emptyBox} width={300} height={300} />
          <p className="text-lg font-medium text-gray-800">{emptyText}</p>
        </div>
      )}
    </>
  );
}
