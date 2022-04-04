import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import MuiLink from "@mui/material/Link";
import { CustomTypography } from "../../allcomponents/AllComponents";
import Box from "@mui/material/Box";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function CustomTourCards({ image, title, action, description }) {
  const cardActionStyles = {
    display: "flex",
    alignItems: "center",
    width: "max-content",

    "& .material-icons, .material-icons-round,": {
      transform: `translateX(2px)`,
      transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)",
    },

    "&:hover .material-icons, &:focus .material-icons, &:hover .material-icons-round, &:focus .material-icons-round":
      {
        transform: `translateX(6px)`,
      },
    underline: "none",
  };

  const imageTemplate = (
    <Box position="relative" borderRadius="lg">
      <Box
        component="img"
        src={image}
        alt={title}
        // borderRadius="lg"
        shadow="md"
        width="100%"
        position="relative"
        zIndex={1}
        sx={{ borderRadius: "10px" }}
      />
      <Box
        // borderRadius="lg"
        shadow="md"
        width="100%"
        height="100%"
        position="absolute"
        left={0}
        top={0}
        sx={{
          backgroundImage: `url(${image})`,
          transform: "scale(0.94)",
          filter: "blur(12px)",
          backgroundSize: "cover",
          borderRadius: "10px",
        }}
      />
    </Box>
  );

  return (
    <Card
      sx={{
        background: "transparent",
        boxShadow: "none",
        overflow: "visible",
      }}
    >
      {action.type === "internal" ? (
        <Link underline="none" to={action.route}>
          {imageTemplate}
        </Link>
      ) : (
        <MuiLink
          underline="none"
          href={action.route}
          target="_blank"
          rel="noreferrer"
        >
          {imageTemplate}
        </MuiLink>
      )}
      <Box pt={2} pb={3}>
        {action.type === "internal" ? (
          <Link underline="none" to={action.route} sx={cardActionStyles}>
            <CustomTypography variant="h5" gutterBottom>
              {title}
            </CustomTypography>
          </Link>
        ) : (
          <MuiLink
            href={action.route}
            target="_blank"
            rel="noreferrer"
            sx={cardActionStyles}
          >
            <CustomTypography variant="h5" gutterBottom>
              {title}
            </CustomTypography>
          </MuiLink>
        )}
        <CustomTypography variant="body2" component="p" color="text" mb={3}>
          {description}
        </CustomTypography>
        {action.type === "internal" ? (
          <CustomTypography
            component={Link}
            to={action.route}
            variant="body2"
            fontWeight="regular"
            color={action.color}
            textTransform="capitalize"
            sx={cardActionStyles}
          >
            {action.label}
            <Icon sx={{ fontWeight: "bold" }}>
              <ArrowForwardIcon />
            </Icon>{" "}
          </CustomTypography>
        ) : (
          <CustomTypography
            component={MuiLink}
            href={action.route}
            target="_blank"
            rel="noreferrer"
            variant="body2"
            fontWeight="regular"
            color={action.color}
            textTransform="capitalize"
            sx={cardActionStyles}
          >
            {action.label}
            <Icon sx={{ fontWeight: "bold" }}>
              <ArrowForwardIcon />
            </Icon>
          </CustomTypography>
        )}
      </Box>
    </Card>
  );
}

// Typechecking props for the TransparentBlogCard
CustomTourCards.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]),
    route: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "inherit",
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "light",
      "dark",
      "text",
    ]).isRequired,
  }).isRequired,
};

export default CustomTourCards;
