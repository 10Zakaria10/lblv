import { FC } from "react";
import { useDeviceSize } from "~utils/useDeviceSize";
import BalanceHistory from "./components/balanceHistory";
import PointsActivity from "./components/PointsActivity";
import ProductList from "./components/productList";
import WelcomeBanner from "./components/welcomeBanner";
import {
  StyledFidSpaceContainer,
  StyledFidSpaceContent,
} from "./FidSpace.style";
import { useClientQuery } from "../hooks/fidSpace";
import useWalletQuery from "../hooks/fidSpace/useWalletQuery";

import { fidSpaceWording } from "./wording";
import useProductQuery from "~containers/hooks/product/useProductQuery";
import { getProductsToDisplay } from "~containers/services/product/product.service";
import useActivityPointsQuery from "../hooks/fidSpace/useActivityPointsQuery";
import usePurchaseHistoryQuery from "../hooks/fidSpace/usePurchaseHistoryQuery";
import { PRODUCTS_BOOST_PARAMS } from "~containers/services/fidSpace/fidSpace.service";

const FidSpace: FC = () => {
  const { down } = useDeviceSize();

  const { client } = useClientQuery();
  const { wallet } = useWalletQuery();
  const { productPage } = useProductQuery(PRODUCTS_BOOST_PARAMS);
  const { activityPoints } = useActivityPointsQuery(4);
  const { purchaseHistory } = usePurchaseHistoryQuery(4);

  const productsToDisplay = getProductsToDisplay(down, productPage?.products);

  return (
    <StyledFidSpaceContainer>
      <WelcomeBanner
        wording={fidSpaceWording.welcomeBanner}
        name={client?.firstName || ""}
        points={wallet?.balance || 0}
        isProfileCompleted={client?.isComplete || false}
        codePin={wallet?.pinCode || ""}
      />
      <StyledFidSpaceContent>
        <ProductList
          products={productsToDisplay}
          wording={fidSpaceWording.productList}
        />
        <BalanceHistory
          data={purchaseHistory || []}
          wording={fidSpaceWording.balanceHistory}
        />
        <PointsActivity
          data={activityPoints || []}
          wording={fidSpaceWording.pointsActivity}
        />
      </StyledFidSpaceContent>
    </StyledFidSpaceContainer>
  );
};

export default FidSpace;
