import { green } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const FONT_WEIGHT = {
  LIGHT: 300,
  REGULAR: 400,
  MEDIUM: 500,
  SEMI_BOLD: 600,
  BOLD: 700,
};

/* === Font size maker === */
const fontSizeMaker = (
  fontsize = 14,
  reducedDisplay = false,
  attachPX = true
) => {
  const fontSizeFactor = reducedDisplay ? 2 : 0;
  //return fontsize - fontSizeFactor + (attachPX ? "px" : "");
  return reducedDisplay ? 11 : fontsize + (attachPX ? "px" : "");
};

const createCustomTheme = (reducedDisplay = false) =>
  createTheme({
    color: {
      x: "#272115",
    },
    palette: {
      primary: {
        main: "#01A7A5",
        light: "#FFFFFF",
      },
      secondary: {
        main: green[500],
      },
      typography: {
        primary: "#434953",
        primary2: "#1B2124",
        light: "#626770",
        dark: "#1B1917",
        green: "#01A7A5",
        green2: "#4DBD9C",
        green3: "#01A7A5",
        darker: "#333333",
        disabled: "#BDBDBC",
        disabled2: "#656870",
        white: "#ffffff",
        error: "#eb2926",
        gray: "#a1a4a9",
        gray2: "#B6B6B6",
        gray3: "#585A61",
        darkGray: "#4E4F50",
        loghtGray: "#444444",
        warning: "#F5571C",
        captionGrey: "#747481",
        lightBlue: "#1F8AC4",
        errorRed: "#BA080D",
        orange: "#D09430",
        commentColor: "#0f1011",
        tagLabelColor: "#2A2C33",
        dark2: "#1D1D1D",
        dark3: "#2D2D2D",
        black: "#000000",
        textPrimaryDisabled: "#9B9CA0",
        yellow: "#FFA000",
        grey4: "#2F2F2F",
        purple: "#6D4ABE",
      },
      profileActions: {
        primary: "#FFFFFF",
        secondary: "#FAB23A",
      },
      background: {
        grayLight: "#F7F8F8",
        grayDark: "#EFEFEF",
        gray1: "#f2f3f4",
        yellowLight: "#FFF8EC",
        gray2: "#dfe1e6",
        white: "#ffffff",
        greenLight: "#E6F6F1",
        gray3: "#F6F6F6",
        gray4: "#434953",

        lightBlue: "#f2fbfb",

        multiSelectOption1: "#F2FAF8",
        multiSelectOption2: "#FFF8DA",
        multiSelectOption3: "#FFF1EC",
        multiSelectOption4: "#DFF2FF",
        multiSelectOption5: "#FFEBF7",
        multiSelectOption6: "#EDF2FF",
        multiSelectOption7: "#EEEEFF",
        multiSelectOption8: "#FFEDEE",
        multiSelectOption9: "#EAFFEA",
        multiSelectOption10: "#FFF1DA",
        multiSelectOption11: "#F6F6F6",
        multiSelectOption12: "#F5F3F2",
        trueTag: "#F2FAF8",
        falseTag: "#FFEDEE",

        getRealSlideOption1: "#00A071",
        getRealSlideOption2: "#6D4ABE",
        getRealSlideOption3: "#007AFF",
        getRealSlideOption4: "#FF5858",
      },
      border: {
        white: "#FFFFFF",
        grayLight: "#F7F8F8",
        grayDark: "#EFEFEF",
        gray1: "#dfe1e6",
        primary: "#01A7A5",
        activeInput: "#434953",
        purple: "#6D4ABE",
      },
      avatar: {
        color1: "#6D4ABE",
        backgroundColor1: "#EBE2FF",
        color2: "#f5571c",
        backgroundColor2: "#fdddd2",
        color3: "#fab23a",
        backgroundColor3: "#fef0d8",
        color4: "#eb2926",
        backgroundColor4: "#fbd4d4",
        color5: "#f8599e",
        backgroundColor5: "#fedeec",
        color6: "#1f8ac4",
        backgroundColor6: "#d2e8f3",
        color7: "#434953",
        backgroundColor7: "#ecedee",
      },
      educationAvatarBackground: {
        background1: "#DEFEFE",
        background2: "#EFE4FF",
      },
      experienceAvatarBackground: {
        background1: "#FFF1D8",
        background2: "#D6F6E6",
        background3: "#E9F8FF",
      },
    },
    typography: {
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", "sans-serif"',
      // htmlFontSize: 10,
      fontSize: parseInt(fontSizeMaker(14, reducedDisplay, false)),
      fontWeightLight: FONT_WEIGHT.LIGHT,
      fontWeightRegular: FONT_WEIGHT.REGULAR,
      fontWeightMedium: FONT_WEIGHT.MEDIUM,
      fontWeightSemiBold: FONT_WEIGHT.SEMI_BOLD,
      fontWeightBold: FONT_WEIGHT.BOLD,
      h1: {
        // fontSize: "4rem",
        fontSize: fontSizeMaker(40, reducedDisplay),
        lineHeight: 1.2,
      },
      h2: {
        // fontSize: "3.2rem",
        fontSize: fontSizeMaker(32, reducedDisplay),
        lineHeight: 1.2,
      },
      h3: {
        // fontSize: "2.4rem",
        fontSize: fontSizeMaker(24, reducedDisplay),
        lineHeight: 1.3,
      },
      h4: {
        // fontSize: "1.6rem",
        fontSize: fontSizeMaker(16, reducedDisplay),
        lineHeight: 1.18,
      },
      subtitle: {
        // fontSize: "1.4rem",
        fontSize: fontSizeMaker(14, reducedDisplay),
        lineHeight: 1.2,
      },
      body1: {
        // fontSize: "1.3rem",
        fontSize: fontSizeMaker(13, reducedDisplay),
        lineHeight: 1.4,
      },
      label: {
        // fontSize: "1.2",
        fontSize: fontSizeMaker(12, reducedDisplay),
        lineHeight: 1.6,
      },
      caption: {
        // fontSize: "1.0rem",
        fontSize: fontSizeMaker(10, reducedDisplay),
        lineHeight: 1.6,
      },
      overline: {
        // fontSize: 1.3rem,
        fontSize: fontSizeMaker(13, reducedDisplay),
        lineHeight: 1.8,
      },
      button: {
        // fontSize: 1.3rem,
        fontSize: fontSizeMaker(13, reducedDisplay),
        lineHeight: 1.8,
      },
    },
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            display: "block",
            overflowWrap: "break-word",
            textTransform: "none",
            textOverflow: "ellipsis",
          },
        },
        defaultProps: {
          variantMapping: {
            h1: "h1",
            h2: "h2",
            h3: "h3",
            h4: "h4",
            subtitle: "span",
            body1: "span",
            body2: "span",
            overline: "span",
            button: "span",
            label: "span",
            caption: "span",
          },
        },
      },
      MuiButton: {
        //Common css for button
        styleOverrides: {
          root: {
            borderRadius: `0.25rem`,
            textTransform: "capitalize",
            // background: '#01A7A5',
          },
        },
        //css based on variant
        variants: [
          {
            props: { variant: "primary" },
            style: {
              background: "#01A7A5",
              color: "#fff",
              border: `0.0625rem solid #01A7A5`,
              "&:hover": {
                background: "#137978",
                border: "1px solid #137978",
              },
              "&:disabled": {
                background: "#C0C2C6",
                border: `0.0625rem solid #C0C2C6`,
                color: "#fff",
              },
            },
          },
          {
            props: { variant: "primary-peak" },
            style: {
              background:
                "linear-gradient(228.75deg, #1D1D1D 2.08%, #6D4ABE 74.66%)",
              color: "#fff",
              padding: "8px 12px",
              borderRadius: "8px",
              "&:disabled": {
                background: "#E0E0E0",
                color: "#fff",
              },
            },
          },
          {
            props: { variant: "secondary-peak" },
            style: {
              border: "1px solid #6D4ABE",
              background:
                "linear-gradient(228.75deg, #1D1D1D 2.08%, #6D4ABE 74.66%)",
              "-webkit-background-clip":
                "text" /* Apply the gradient as text color */,
              "-webkit-text-fill-color": "transparent",
              padding: "8px 12px",
              borderRadius: "8px",
              "&:disabled": {
                background: "#E0E0E0",
                color: "#fff",
              },
            },
          },
          {
            props: { variant: "secondary" },
            style: {
              color: "#01A7A5",
              background: "#fff",
              border: `0.0625rem solid #01A7A5`,
              "&:hover": {
                border: "1px solid  #01A7A5",
                background: "#F2FAF9",
              },
              "&:disabled": {
                background: "#F2F3F4",
                border: `0.0625rem solid #C0C2C6`,
                color: "#C0C2C6",
              },
            },
          },
          {
            props: { variant: "outlined" },
            style: {
              color: "#01A7A5",
              background: "#fff",
              border: "none",
              "&:hover": {
                color: "#007354",
                background: "none",
                border: "none",
              },
              "&:disabled": {
                color: "#C0C2C6",
                border: "none",
              },
              "&:focus": {
                outline: "none",
                highlight: "none",
              },
            },
          },
          {
            props: { variant: "lightgreen-outlined" },
            style: {
              color: "#6D4ABE",
              background: "#fff",
              border: "1px solid #6D4ABE",
              "&:hover": {
                color: "#6D4ABE",
                background: "#fff",
                border: "1px solid #6D4ABE",
                opacity: 0.7,
              },
              "&:disabled": {
                color: "#C0C2C6",
                border: "none",
              },
            },
          },
          {
            props: { variant: "light-blue" },
            style: {
              color: "#1F8AC4",
              background: "#DFF2FF",
              border: "none",
              borderRadius: "2px",
              padding: "2px 6px",
              minWidth: "unset",
              "&:hover": {
                color: "#1F8AC4",
                background: "#DFF2FF",
                border: "none",
              },
              "&:disabled": {
                color: "#C0C2C6",
                border: "none",
              },
            },
          },
          {
            props: { variant: "lightgreen" },
            style: {
              color: "#01A7A5",
              background: "#E6F6F1",
              border: "none",
              "&:hover": {
                color: "#01A7A5",
                background: "#E6F6F1",
                border: "none",
              },
              "&:disabled": {
                color: "#C0C2C6",
                border: "none",
              },
            },
          },
          {
            props: { variant: "primary-v2" },
            style: {
              minWidth: "unset",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: "8px 12px",
              gap: "8px",
              background: "#01A7A5",
              border: "1px solid #01A7A5",
              borderRadius: "8px",
              color: "#fff",
              "&:hover": {
                background: "#137978",
                border: "1px solid #137978",
              },
              "&:disabled": {
                background: "#C0C2C6",
                border: `0.0625rem solid #C0C2C6`,
                color: "#fff",
              },
            },
          },
          {
            props: { variant: "secondary-v2" },
            style: {
              minWidth: "unset",
              color: "#01A7A5",
              background: "#fff",
              border: `0.0625rem solid #01A7A5`,
              borderRadius: "8px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: "8px 12px",
              gap: "8px",
              "&:hover": {
                border: "1px solid  #01A7A5",
                background: "#F2FAF9",
              },
              "&:disabled": {
                background: "#F2F3F4",
                border: `0.0625rem solid #C0C2C6`,
                color: "#C0C2C6",
              },
            },
          },
          {
            props: { variant: "red-secondary" },
            style: {
              minWidth: "unset",
              color: "#FF5858",
              background: "#fff",
              border: `0.0625rem solid #FFBABA`,
              borderRadius: "20px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: "4px 13px",
              gap: "8px",
            },
          },
          {
            props: { variant: "primary-v3" },
            style: {
              minWidth: "unset",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: "8px 12px",
              gap: "8px",
              background: "#f2f2f2",
              border: "1px solid #f2f2f2",
              borderRadius: "8px",
              color: "#1D1D1D",
              "&:hover": {
                background: "#f2f2f2",
              },
              "&:disabled": {
                background: "#f2f2f2",
                border: `0.0625rem solid #f2f2f2`,
                color: "#1D1D1D",
              },
            },
          },
          {
            props: { variant: "text" },
            style: {
              background: "transparent",
              color: "#6D4ABE",
              border: `none`,
              "&:hover": {
                background: "#f2f2f2",
              },
              "&:disabled": {
                background: "#C0C2C6",
                border: `0.0625rem solid #C0C2C6`,
                color: "#fff",
              },
            },
          },
        ],
      },
      MuiPaper: {
        //Common css for button
        styleOverrides: {
          root: {
            boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.09) !important",
            borderRadius: "2px !important",
          },
        },
      },
      MuiList: {
        styleOverrides: {
          root: {
            border: "1px solid #E6E6E7",
          },
        },
      },
      MuiChip: {
        //Common css for chip
        styleOverrides: {
          root: {
            borderRadius: `16px`,
          },
          label: {
            overflow: "unset",
            fontWeight: "600",
            fontSize: fontSizeMaker(10, reducedDisplay),
            color: "#1F8AC4",
          },
        },
        //css based on variant
        variants: [
          {
            props: { variant: "lightBlue" },
            style: {
              color: "#1B1917",
              background: "#DAF2FF",
              width: "max-content",
              height: "22px",
            },
          },
          {
            props: { variant: "lightBlueSmall" },
            style: {
              color: "#1B1917",
              background: "#DAF2FF",
              width: "45px",
              height: "15px",
            },
          },
        ],
      },

      MuiAutocomplete: {
        styleOverrides: {
          inputRoot: {
            padding: "0.25rem 0rem 0.25rem 0.5rem",
          },
          listbox: {},
        },
      },
      MuiSelect: {
        defaultProps: {
          variant: "standard",
        },
      },
      MuiTextField: {
        defaultProps: {
          variant: "standard",
        },
      },
      MuiFormControlLabel: {
        styleOverrides: {
          root: {
            ".MuiFormControlLabel-label.Mui-disabled": {
              color: "#626770",
            },
          },
        },
      },
      MuiAccordion: {
        styleOverrides: {
          root: {
            "&.Mui-expanded": {
              margin: "auto",
            },
          },
        },
      },
      // .css-yw020d-MuiAccordionSummary-expandIconWrapper.Mui-expanded
      MuiAccordionSummary: {
        styleOverrides: {
          root: {
            flexDirection: "row-reverse",
            ".MuiAccordion-root.Mui-expanded": {
              margin: "0px",
            },
            "&.Mui-expanded": {
              borderBottom: "1px solid #ecedee",
              borderTop: "1px solid #ecedee",
              minHeight: "80px",
            },
            ".MuiAccordionSummary-content.Mui-expanded": {
              margin: "12px 0",
            },
            ".MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
              transform: "rotate(90deg)",
            },
          },
        },
      },
      MuiAccordionDetails: {
        styleOverrides: {
          root: {
            padding: "0px",
          },
        },
      },
      MuiSwitch: {
        variants: [
          {
            props: { variant: "primary-2" },
            style: {
              "& .MuiSwitch-switchBase.Mui-checked": {
                color: "#2A2C33",
              },
              "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                backgroundColor: "#2A2C33",
              },
            },
          },
          {
            props: { variant: "primary-3" },
            style: {
              "& .MuiSwitch-switchBase.Mui-checked": {
                color: "#6D4ABE !important",
              },
              "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                backgroundColor: "#6D4ABE",
              },
            },
          },
        ],
      },
      MuiCheckbox: {
        //Common css for button
        styleOverrides: {
          root: {
            "&.Mui-checked": {
              color: "#2A2C33 !important",
            },
          },
        },
      },
      MuiTabs: {
        styleOverrides: {
          indicator: {
            backgroundColor: "#6D4ABE",
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            color: "#595959",
            textTransform: "none",
            opacity: 1,
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "22px",
          },
        },
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 748,
        md: 900,
        splitwindow: 1150,
        lg: 1200,
        xl: 1536,
      },
    },
  });

export default createCustomTheme;
