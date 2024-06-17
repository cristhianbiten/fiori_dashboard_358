sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("br.com.gestao.dashboard.controller.Dashboard", {
            onInit: function () {
                var cardsManisfest = new JSONModel();
                cardsManisfest.loadData(sap.ui.require.toUrl("br/com/gestao/dashboard/model/cardsManifest.json"));
                this.getView().setModel(cardsManisfest, "cards");
            }
        });
    });
