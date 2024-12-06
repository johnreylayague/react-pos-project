import { ListItem } from "@mui/material";
import { CustomizedList, CustomizedListItem, CustomizedListItemText } from "./SummaryListStyles";

type summaryListDataProps = { id: number; name: string; price: string }[];
type SummaryListState = {};

const summaryListData: summaryListDataProps = [
  { id: 1, name: "Discount", price: "₱3.94" },
  { id: 3, name: "Total", price: "₱5.94" },
];

const SummaryList: React.FC<SummaryListState> = (props) => {
  const {} = props;

  return (
    <CustomizedList>
      <ListItem divider disablePadding></ListItem>
      {summaryListData.map((summary, index, summaryArray) => {
        const rowFontWeight = summary.id === 3 ? "bold" : "normal";
        const currentRowIndex = index + 1;
        const totalSummaryCount = summaryArray.length;

        const dividerProps: { divider: boolean } =
          currentRowIndex === totalSummaryCount ? { divider: false } : { divider: true };

        return (
          <CustomizedListItem key={summary.id} disableGutters {...dividerProps}>
            <CustomizedListItemText
              primary={summary.name}
              secondary={summary.price}
              primaryTypographyProps={{
                sx: () => ({
                  typography: "h6",
                  fontWeight: rowFontWeight,
                }),
              }}
              secondaryTypographyProps={{
                sx: () => ({
                  typography: "h6",
                  fontWeight: rowFontWeight,
                  color: "inherit",
                }),
              }}
            />
          </CustomizedListItem>
        );
      })}
    </CustomizedList>
  );
};

export default SummaryList;
