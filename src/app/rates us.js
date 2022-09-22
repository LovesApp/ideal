    // Show rate us
    CM_APIController.ShowRateUsDialog();

    // Show a system dialog
    CM_APIController.ShowAlertDialog(
        "title",
        "msg",
        "Ok",
        "No",
        new CMDialogCallback(
            () =>
            {
                CM_APIController.ShowToastMessage("Positive");
            },
            () =>
            {
                CM_APIController.ShowToastMessage("Negative");
            }
        )
    );

    // Show System datetime picker
    CM_APIController.ShowDatePickerWithCallback(
            "Ok",
            "No",
            new CMDatePickerCallback(
                (date) =>
                {
                    CM_APIController.ShowToastMessage(date);
                }
            )
        );
