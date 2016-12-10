      function OnTypeSelected()
      {
        switch $("#userTypeSelection").val()
        {
          case "seeker":
            $("#seekerSelectionPanel").show();
            $("#businessDataDiv").hide();
          break;
          case "business":
            $("#seekerSelectionPanel").hide();
            $("#businessDataDiv").show();
          break;
          case "provider":
            $("#seekerSelectionPanel").hide();
            $("#businessDataDiv").show();
          break;
          case "volunteer":
            $("#seekerSelectionPanel").hide();
            $("#businessDataDiv").hide();
          break;
          default:
            $("#seekerSelectionPanel").hide();
            $("#businessDataDiv").hide();
          break;
        }
      }
      