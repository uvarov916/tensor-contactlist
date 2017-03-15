/* ******************
 * MODEL
 * ******************/
function ListModel(dsName) {
    var data = readDataFromDB(dsName);

    return {
        getData: function() {
            return data;
        }
    }
}

/* ******************
 * VIEW
 * ******************/
function ListView(listData) {
    var htmlString = "";

    for (var i = 0; i < listData.length; i++) {
        htmlString += '<div class="placeholder"></div><div class="cell-header" id="header' + i + '">' + listData[i].header + '</div>';
        for (var j = 0; j < listData[i].items.length; j++) {
            htmlString += '<div class="contact-single">' + listData[i].items[j] + '</div>';
        };
    };
    
    return {
        getHtml: function() {
            return htmlString;
        }
    }
}

/* ******************
 * CONTROLLER
 * ******************/
function ListController(dsName, domEl, sortFunc, groupFunc, cellTmpl) {
    // Get data
    var model = ListModel(dsName);

    // Transform data
    var cellGroups = {};
    var data = model.getData();
    data.sort(sortFunc);
    
    // Group using given function
    for (var i = 0; i < data.length; i++) {
        var groupName = groupFunc(data[i]);
        if (!cellGroups[groupName]) {
            cellGroups[groupName] = [];
        }
        cellGroups[groupName].push(data[i])
    }

    // Transform into appropriate format
    var listData = [];
    for (var key in cellGroups) {
        listData.push({
            "header": key,
            "items": cellGroups[key].map((item) => {
                return cellTmpl(item);
            })
        });
    }

    // Create view
    var view = ListView(listData);
    domEl.html(view.getHtml());

    // Listen for events on scroll
    domEl.scroll(() => {
        // Do the sticky headers
    });
}