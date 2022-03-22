var selection = 0;

function filterSelection(c) 
{
    var x, i, v;
    v = document.getElementById(c);
    x = document.getElementsByClassName("filter");

    if(v.checked)
    {
        if(selection == 0)
        {
            for (i = 0; i < x.length; i++) 
            {
                w3AddClass(x[i], "show");
            }
        }
        selection++;
        for (i = 0; i < x.length; i++) 
        {
            if (x[i].className.indexOf(c) > -1) 
                w3RemoveClass(x[i], "show");
        }
    }
    else
    {
        selection--;
        for (i = 0; i < x.length; i++) 
        {
            if (x[i].className.indexOf(c) > -1) 
                w3AddClass(x[i], "show");
        }

        if(selection == 0)
        {
            for (i = 0; i < x.length; i++) 
            {
                w3RemoveClass(x[i], "show");
            }
        }
    }
    console.log(selection);
}

function w3AddClass(element, name) 
{
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");

    for (i = 0; i < arr2.length; i++) 
    {
        if (arr1.indexOf(arr2[i]) == -1) 
        {
            element.className += " " + arr2[i];
        }
    }
}
  
function w3RemoveClass(element, name) 
{
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");

    for (i = 0; i < arr2.length; i++) 
    {
        while (arr1.indexOf(arr2[i]) > -1) 
        {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }

    element.className = arr1.join(" ");
}