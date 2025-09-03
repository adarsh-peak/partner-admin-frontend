import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import searchIcon from "../../assets/disabled/search.svg";
import Actions from "../../components/Actions";
import Card from "../../components/Card";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import CustomizedTables from "../../components/Table";
import api from "../../utils/api";
import { getFormattedDate, getPeriodFromEventDate } from "../../utils/date";
import QuaterlyReportsTable from "./QuaterlyReport";

type Props = {
  activeLeftMenuTabId: string;
};

const TABS = [
  { id: "all", heading: "Available Statements" },
  { id: "quaterly", heading: "Quaterly Reports" },
  { id: "semi-annual", heading: "Semi Annual" },
  { id: "annual", heading: "Annual Reports" },
];

const FinancialStatement = ({ activeLeftMenuTabId }: Props) => {
  const [filters, setFilters] = useState<{}>({});
  const [openModal, setOpenModal] = useState<{open: boolean, data?: object}>({open: false});
  const [quaterlyReports, setQuaterlyReports] = useState<object>({});
  const [semiAnnualReports, setSemiAnnualReports] = useState<object>({});
  const [annualReports, setAnnualReports] = useState<object>({});

  const headings = [
    { id: "Fund", name: "Fund" },
    { id: "Period", name: "Period" },
    { id: "Type", name: "Type" },
    { id: "EventDate", name: "Event Date" },
    { id: "Status", name: "Status" },
    {
      id: "Actions",
      name: "Actions",
      renderer: (id: string, row: object) => (
        <Actions id={id} row={row} handleViewClick={handleViewClick} />
      ),
    },
  ];

  const handleFundChange = () => {};
  const handleTypeChange = () => {};
  const handleViewClick = (id: string, row: object) => setOpenModal({open: true, data: row});

  const getFinancialStatements = async () => {
    const quaterlyResponse = await api.getData(
      "financial-statement/quaterly-reports"
    );
    const semiAnnualResponse = await api.getData(
      "financial-statement/semiannual-reports"
    );
    const annualResponse = await api.getData(
      "financial-statement/annual-reports"
    );

    setQuaterlyReports(quaterlyResponse?.data);
    setSemiAnnualReports(semiAnnualResponse?.data);
    setAnnualReports(annualResponse?.data);
  };

  useEffect(() => {
    getFinancialStatements();
  }, [filters]);

  const getDataBasedOnTabId = () => {
    const quaterlyReportCount = quaterlyReports?.SummaryFStmtRS?.length;
    return {
      quaterly: quaterlyReportCount,
    };
  };

  const getTableData = () => {
    const rows = [];
    quaterlyReports?.SummaryFStmtRS?.forEach((item) => {
      rows.push({
        ...item,
        Fund: item?.["FundName"],
        Period: getPeriodFromEventDate(item?.EventDate),
        Type: "Quaterly Report",
        EventDate: getFormattedDate(item?.EventDate),
      });
    });

    return rows;
  };

  return (
    <div className="flex flex-col h-screen">
      <Header activeTabId={activeLeftMenuTabId} />
      <div className="flex flex-col p-4 overflow-hidden h-full">
        <div className="grid grid-cols-4 gap-4 mb-4">
          {TABS.map((item) => (
            <Card
              heading={item?.heading}
              count={getDataBasedOnTabId()?.[item?.id] || 0}
              size="small"
            />
          ))}
        </div>
        <div className="bg-white grid grid-cols-3 gap-4 mb-4 p-4 rounded-md">
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search Statements..."
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <img src={searchIcon} alt="" />
                  </InputAdornment>
                ),
              },
            }}
          />
          <FormControl size="small">
            <InputLabel id="funds">All Funds</InputLabel>
            <Select
              labelId="funds"
              id="funds-select"
              value={null}
              label="All Funds"
              onChange={handleFundChange}
              variant="outlined"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl size="small">
            <InputLabel id="types">All Types</InputLabel>
            <Select
              labelId="types"
              id="types-select"
              value={null}
              label="All Types"
              onChange={handleTypeChange}
              variant="outlined"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="flex-1 bg-white">
          <CustomizedTables headings={headings} rows={getTableData()} />
        </div>
      </div>

      <Modal
        openModal={openModal}
        heading={`${openModal?.data?.Type} - ${openModal?.data?.Fund}`}
        onClose={() => setOpenModal({open: false})}
      >
          <QuaterlyReportsTable data={openModal?.data} />
      </Modal>
    </div>
  );
};

export default FinancialStatement;
