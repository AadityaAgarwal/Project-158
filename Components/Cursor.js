AFRAME.registerComponent("cursor_event_listener", {
    schema: { selected_item_id: { default: '', type: "string" } },

    init: function () {
        this.handle_mouse_enter_events()
        this.handle_mouse_leave_events()
    },

    handle_places_list: function () {
        const id = this.el.getAttribute("id")
        const books_id = ["captain-aero", "outer-space", "spiderman", "superman"]
        if (books_id.includes(id)) {
            const books_container = document.querySelector("#books")
            books_container.setAttribute("cursor_event_listener", { selected_item_id: id })
            this.el.setAttribute("material", {
                color: "blue",
                opacity: 1,
            })
        }
    },

    handle_mouse_enter_events: function () {
        this.el.addEventListener("mouseenter", () => {
            this.handle_places_list()
        })
    },

    handle_mouse_leave_events:function(){
        this.el.addEventListener("mouseleave",()=>{
            const {selected_item_id}=this.data;
            if(selected_item_id){
                const el=document.querySelector(`#${selected_item_id}`)
                const id=el.getAttribute("id")
                if(id==selected_item_id){
                    el.setAttribute("material",{
                        color:"white",
                        opacity:1,
                    })
                }
            }
        })
    },

})