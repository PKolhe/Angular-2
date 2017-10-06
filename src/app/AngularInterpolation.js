/*

    Angular Interpolation :

        *   Interpolation is all about Data Binding.
        *   Data Binding is classified into 3 categories :
                1. One Way Data Binding : From Component to View Template
                2. One Way Data Binding : From View Template to Component
                3. Two Way Data Binding : (From Component to View Template) and (From View Template to Component)

        *   Interpolation Examples : One Way Data Binding - From Component to View Template
            Refer: app.component.ts

                <h1>{{ firstName }} </h1>

                <h1>{{ 'Name = ' + firstName }} </h1>

                <h1>{{ 10 + 20 + 30 }} </h1>

                <h1>{{ firstName ? firstName : 'No Name Specified' }} </h1>

                <h1>{{ 'Full Name ='+ getFullName() }} </h1>

                <img src= '{{ imagePath }}'></img>

            Note: We can use any valid template expression inside {{ }},
                  we can use ternary operator, we can set imagePath,
                  we can call component functions.

        * Property Binding:
            
            * Both Interpolation and Data binding flows data value in one direction. i.e. from component class
              property to a HTML element property.
                                <img [src] = 'imagePath' />         ....Property Binding
                                <img src = '{{imagePath}}' />       ....Interpolation
            * Remember to enclose property name to pair of square brackets.
                Ex. <button [disabled] = 'isDisabled'> Click Me </button>
            * Canonical form : alternate to square bracket.
                Ex. <button bind-disabled = 'isDisabled'> Click Me </button>
              We can use [] or we can use bind-, for property binding
            * Angular data binding sanitizes malicious content before displaying it.
                Ex. <div> {{badHTML}}</div>         ... Interpolation
                    <div [innerHTML] = 'badHTML'></div>     ... Property Binding
                    Both the techniques automatically sanitizes malicious content.

        * Interpolation Vs Property Binding:

            * Interpolation is a special syntax that angular converts into a property binding.

            * To concatenate strings we must use interpolation instead of property binding.
                Ex. <img src = 'http://www.pragimtech.com/{{imagePath}}' />

            * To set an element property to a non-string data value, we must use property binding.
                Ex. <button [disabled] = 'isDisabled'> Click Me </button>
              Interpolation does not work in above case.

        *   HTML Attribute Vs DOM Property :

            * DOM stands for Document Object Model, When browser loads a web page, browser creates
              a document object model of that page.
            * DOM contains the HTML elements as objects, their properties, methods and events and
              it is a standard for accessing, modifying, adding or deleting HTML elements.
                            Window
                               |
                            document
                               |
                              HTML
                               |
                        head        body
            * Attributes are defined by the element while the properties are defined by the DOM.
            * Attributes initializ DOM properties. Once the initialization complete, the attributes job is done.
            * Property values can change in DOM, while attribute values can not.

            Note: HTML attributes and DOM properties are different things.
                  Angular bindings works with properties and events, and not attributes.
            Example: <button id="button1" class='' [disabled] = 'isDisabled' value='Click Me'> Click Me </button>
                        disabled & value is a DOM property and not attribute.
                        id and class is the HTML attribute

        *   HTML Attribute Binding:
             * Interpolation & Property binding deal with binding component class properties to HTML element
                  properties, and NOT HTML attributes.
             * But not all HTML element attributes have corresponding properties.
                  Ex. colspan attribute does not have a corresponding property in DOM.
             * We need to use 'attr' because html attribute is not known to DOM.
             * We can use attr.attributename syntax to bind property to html attribute.
             * we can use any syntax - interpolation or property binding.
             * Ex. <td attr.colspan = '{{colspan}}'>  OR
                   <td [attr.colspan] = 'colspan'>

        * Class Binding:
             * Replace all the existing CSS classes with one or more classes.
                 [class] = 'classesToApply'
             * Add or remove a single CSS Class.
                 [class.boldClass] = 'applyBoldClass'
             * Add or remove multiple CSS Classes.
                 [ngClass] = 'addClasses()'
                 addClasses() {
                     let classes = {
                             boldClass: this.applyBoldClass,
                             italicClass: this.appyItalicClass
                     }
                     return classes;
                 }

        * Style Binding: ( Setting inline styles )
                * Setting a Single inline style using style binding.
                    Ex. <button style="color:Red" [style.font-weight]="isbold ? 'bold': 'normal'">
                        Click Me </button>
                * Add or remove multiple styles.
                    [ngStyles] = 'addStyles()'
                    addStyles() {
                        let styles = {
                            'font-size.px': this.fontSize,
                            'font-style': this.isItalic ? 'italic' : 'normal',
                            'font-weight': this.isbold ? 'bold' : 'normal'
                        }
                        return styles;
                    }

        * Event Binding: (one Way Data Binding- From HTML element to Component)
            
            The following bindings that we have discussed so far flow data in one direction
            i.e from a component class property to an HTML element property.
                1. Interpolation
                2. Property Binding
                3. Attribute Binding
                4. Class Binding
                5. Style Binding

            How about flowing data in the opposite direction i.e from an HTML element to a component.
            Event Binding flows data in the opposite direction.
            When a user performs any action like clicking on a button, hovering over an element,
            selecting from a dropdownlist, typing in a textbox etc, then the corresponding event
            for that action is raised. We need to know when user performs these actions.
            We can use angular event binding to get notified when these events occur.

                Ex. <button (click)="onClick()">Click me</button>
                    <button on-click="onClick()">Click me</button>       ......the canonical form

            *ngIf Directive:

                The * prefix before a directive indicates, it is a structural directive
                The ngIf directive conditionally adds or removes content from the DOM based on whether or not
                an expression is true or false.
                If "showDetails" is true, "Gender" and "Age" <tr> elements are added to the DOM, else removed.

        * Two Way Data Binding:
            
                Name : <input [value]='name' (input)='name = $event.target.value'>
                <br>
                You entered : {{name}}

            [value]='name' : This property binding flows data from the component class to element property.
            (input)='name = $event.target.value' : This event binding flows data in the opposite direction.
                    i.e from the element to component class property "name"
            $event - Is exposed by angular event binding, and contains the event data.
                     To retrieve the value from the input element use - $event.target.value.
            name = $event.target.value - This expression updates the value in the name property in
                   the component class.
            You entered : {{name}} - This interpolation expression will then display the value on the web page.

            So in short two-way data binding in Angular is a combination of both Property Binding and
            Event Binding. To save a few keystrokes and simplify two-way data binding angular has provided
            ngModel directive.
            So with ngModel directive we can rewrite the follwing line of code -
                Name : <input [value]='name' (input)='name = $event.target.value'>
                Like this : Name : <input [(ngModel)]='name'>

            At this point if you view the page in the browser, you will get the following error
            Template parse errors:
                Can't bind to 'ngModel' since it isn't a known property of 'input'

            This is because ngModel directive is, in an Angular system module called FormsModule.
            For us to be able to use ngModel directive in our root module - AppModule,
            we will have to import FormsModule first.
            Here are the steps to import FormsModule into our AppModule
                1. Open app.module.ts file
                2. Include the following import statement in it import { FormsModule } from '@angular/forms';
                3. Also, include FormsModule in the 'imports' array of @NgModule imports: [BrowserModule, FormsModule]

            The square brackets on the outside are for property binding.
            The parentheses on the inside are for event binding.

*/
//# sourceMappingURL=AngularInterpolation.js.map