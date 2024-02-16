

const resourceRef = document.querySelector("#resources")
const showResourcesBtn = document.querySelector("#show-resources")

showResourcesBtn.addEventListener("click", onToggleShowResourcesBtn)
resourceRef.addEventListener("mouseover", onHoverBoldResources)

function onToggleShowResourcesBtn(e)
{
    if (resourceRef.classList.contains("d-none"))
    {
        resourceRef.classList.remove("d-none")
        e.target.textContent = "Hide Resources"
    }
    //add function to close resources
    else
    {
        resourceRef.classList.add("d-none")
        e.target.textContent = "Show Resources"
    }
    
}

function onHoverBoldResources (e)
{
    //check if content hovered within #resources is a div and apply styling
    if (e.target.tagName === 'DIV')
    {
        e.target.classList.add("fw-bold")
        e.target.addEventListener("mouseout", onMouseOutRevertBold)
        e.target.addEventListener("click", onClickResourceElement)
        function onMouseOutRevertBold (e)
        {
            e.target.classList.remove("fw-bold")
            e.target.classList.remove("fst-italic")
        }
        
        function onClickResourceElement (e)
        {
            e.target.classList.add("fst-italic")
        }
    }
}

