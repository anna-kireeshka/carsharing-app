type Router = string | symbol | null | undefined;
export const getLabel = (routerName: Router) => {
  if (routerName === "location") {
    return {
      name: "CarModel",
      label: "Выбрать модель",
    };
  } else if (routerName === "CarModel") {
    return {
      name: "OrderAdditionally",
      label: "Дополнительно",
    };
  } else if (routerName === "OrderAdditionally") {
    return {
      name: "FinalOrder",
      label: "Итого",
    };
  } else if (routerName === "FinalOrder") {
    return {
      name: "FinalOrder",
      label: "Заказать",
    };
  } else if (routerName === "ConfirmOrder") {
    return {
      name: "FinalOrder",
      label: "Отменить",
    };
  }
};
