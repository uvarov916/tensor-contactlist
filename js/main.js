$(document).ready(function(){
    // Create first list
    ListController(
        // Dataset name
        "dataset1", 
        // Dom location
        $("#list1 .list-container"),
        // Sorting
        (el1, el2) => {
            if (el1.lastName < el2.lastName)
                return -1;
            if (el1.lastName > el2.lastName)
                return 1;
            if (el1.firstName < el2.lastName)
                return -1;
            if (el1.firstName > el2.lastName)
                return 1;
            return 0;
        },
        // Groupping
        (el) => {
            return el["lastName"][0]
        },
        // Cell template
        (el) => {
            return el["firstName"] + " <b>" + el["lastName"] + "</b>";
        }
    );

    // Create second list
    ListController(
        // Dataset name
        "dataset2", 
        // Dom location
        $("#list2 .list-container"),
        // Sorting
        (el1, el2) => {
            if (el1.lastName < el2.lastName)
                return -1;
            if (el1.lastName > el2.lastName)
                return 1;
            if (el1.firstName < el2.lastName)
                return -1;
            if (el1.firstName > el2.lastName)
                return 1;
            return 0;
        },
        // Groupping
        (el) => {
            return el["company"]
        },
        // Cell template
        (el) => {
            return "<p>" + el["firstName"] + " " + el["lastName"] + "</p><p class='company'>" + el["company"] + "</p>";
        }
    );
});