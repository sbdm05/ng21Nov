'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">crm documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-e3fbc98736c0a7552b0c38e7972e12daa604204960a834a5f5ae4bfe23e979bd6da0bfc1ee30f2dede2ddc49e5f1ffc92b72ea6646df85227449970a3cb03159"' : 'data-target="#xs-components-links-module-AppModule-e3fbc98736c0a7552b0c38e7972e12daa604204960a834a5f5ae4bfe23e979bd6da0bfc1ee30f2dede2ddc49e5f1ffc92b72ea6646df85227449970a3cb03159"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-e3fbc98736c0a7552b0c38e7972e12daa604204960a834a5f5ae4bfe23e979bd6da0bfc1ee30f2dede2ddc49e5f1ffc92b72ea6646df85227449970a3cb03159"' :
                                            'id="xs-components-links-module-AppModule-e3fbc98736c0a7552b0c38e7972e12daa604204960a834a5f5ae4bfe23e979bd6da0bfc1ee30f2dede2ddc49e5f1ffc92b72ea6646df85227449970a3cb03159"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ClientsModule.html" data-type="entity-link" >ClientsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ClientsModule-346261a7e9be540a8071732944b26d69b77c2b428036809e0f916e8b16a244e8ad1b274caa8552039b70c49af16fd57f9c4dcf0622157b52a4b8c1fbb17f3827"' : 'data-target="#xs-components-links-module-ClientsModule-346261a7e9be540a8071732944b26d69b77c2b428036809e0f916e8b16a244e8ad1b274caa8552039b70c49af16fd57f9c4dcf0622157b52a4b8c1fbb17f3827"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ClientsModule-346261a7e9be540a8071732944b26d69b77c2b428036809e0f916e8b16a244e8ad1b274caa8552039b70c49af16fd57f9c4dcf0622157b52a4b8c1fbb17f3827"' :
                                            'id="xs-components-links-module-ClientsModule-346261a7e9be540a8071732944b26d69b77c2b428036809e0f916e8b16a244e8ad1b274caa8552039b70c49af16fd57f9c4dcf0622157b52a4b8c1fbb17f3827"' }>
                                            <li class="link">
                                                <a href="components/PageAddClientComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageAddClientComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageEditClientComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageEditClientComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageListClientsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageListClientsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ClientsRoutingModule.html" data-type="entity-link" >ClientsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoreModule-5fa0cf57df5977acec4b17347cea35eab655a2443ac2c7f9bd86196a5b9574871b5b2d983b60980a279912a44763737557863c9afdf1ab40c72d8956e7a7956f"' : 'data-target="#xs-components-links-module-CoreModule-5fa0cf57df5977acec4b17347cea35eab655a2443ac2c7f9bd86196a5b9574871b5b2d983b60980a279912a44763737557863c9afdf1ab40c72d8956e7a7956f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-5fa0cf57df5977acec4b17347cea35eab655a2443ac2c7f9bd86196a5b9574871b5b2d983b60980a279912a44763737557863c9afdf1ab40c72d8956e7a7956f"' :
                                            'id="xs-components-links-module-CoreModule-5fa0cf57df5977acec4b17347cea35eab655a2443ac2c7f9bd86196a5b9574871b5b2d983b60980a279912a44763737557863c9afdf1ab40c72d8956e7a7956f"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/IconsModule.html" data-type="entity-link" >IconsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-IconsModule-0183539146bd2ccc05e4e1a43bfa9fcd6aca91db330e8e220021c70d3abf8ff037bd06c4ad8113aa62da9ec48759ce7c0b43d947aa40f3e71d3274a2dc84d31b"' : 'data-target="#xs-components-links-module-IconsModule-0183539146bd2ccc05e4e1a43bfa9fcd6aca91db330e8e220021c70d3abf8ff037bd06c4ad8113aa62da9ec48759ce7c0b43d947aa40f3e71d3274a2dc84d31b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-IconsModule-0183539146bd2ccc05e4e1a43bfa9fcd6aca91db330e8e220021c70d3abf8ff037bd06c4ad8113aa62da9ec48759ce7c0b43d947aa40f3e71d3274a2dc84d31b"' :
                                            'id="xs-components-links-module-IconsModule-0183539146bd2ccc05e4e1a43bfa9fcd6aca91db330e8e220021c70d3abf8ff037bd06c4ad8113aa62da9ec48759ce7c0b43d947aa40f3e71d3274a2dc84d31b"' }>
                                            <li class="link">
                                                <a href="components/IconCloseComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconCloseComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconDeleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconDeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconNavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconNavComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link" >LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginModule-56bb13dbb18c1706616cd88650affcc39458d90582199761c518d78a18674e4c2a11a85ede778232c01047ca303de46eb4cc71767b8ea2edbd77d643b787a508"' : 'data-target="#xs-components-links-module-LoginModule-56bb13dbb18c1706616cd88650affcc39458d90582199761c518d78a18674e4c2a11a85ede778232c01047ca303de46eb4cc71767b8ea2edbd77d643b787a508"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginModule-56bb13dbb18c1706616cd88650affcc39458d90582199761c518d78a18674e4c2a11a85ede778232c01047ca303de46eb4cc71767b8ea2edbd77d643b787a508"' :
                                            'id="xs-components-links-module-LoginModule-56bb13dbb18c1706616cd88650affcc39458d90582199761c518d78a18674e4c2a11a85ede778232c01047ca303de46eb4cc71767b8ea2edbd77d643b787a508"' }>
                                            <li class="link">
                                                <a href="components/PageForgotPasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageForgotPasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageResetPasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageResetPasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageSignInComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageSignInComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageSignUpComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageSignUpComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginRoutingModule.html" data-type="entity-link" >LoginRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/OrdersModule.html" data-type="entity-link" >OrdersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OrdersModule-6794b7f101172f99b185681dba010fab920982c5a1f85b4604fd75c0aace57ff005e7cf44471dfeb0358cd2818f774964644b58d0411e3afa87c4c7d10c2509a"' : 'data-target="#xs-components-links-module-OrdersModule-6794b7f101172f99b185681dba010fab920982c5a1f85b4604fd75c0aace57ff005e7cf44471dfeb0358cd2818f774964644b58d0411e3afa87c4c7d10c2509a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OrdersModule-6794b7f101172f99b185681dba010fab920982c5a1f85b4604fd75c0aace57ff005e7cf44471dfeb0358cd2818f774964644b58d0411e3afa87c4c7d10c2509a"' :
                                            'id="xs-components-links-module-OrdersModule-6794b7f101172f99b185681dba010fab920982c5a1f85b4604fd75c0aace57ff005e7cf44471dfeb0358cd2818f774964644b58d0411e3afa87c4c7d10c2509a"' }>
                                            <li class="link">
                                                <a href="components/FormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageAddOrderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageAddOrderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageEditOrderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageEditOrderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageListOrdersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageListOrdersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrdersRoutingModule.html" data-type="entity-link" >OrdersRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PageNotFoundModule.html" data-type="entity-link" >PageNotFoundModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PageNotFoundModule-ff71632f17a3e64bde3955e833e971a2134de7f34cdcdc7d0fe2a9dbfca13b639bd6b40cd40c4dadb24c0bbabffe3c444550cabd13884b36870ed810250c0bc5"' : 'data-target="#xs-components-links-module-PageNotFoundModule-ff71632f17a3e64bde3955e833e971a2134de7f34cdcdc7d0fe2a9dbfca13b639bd6b40cd40c4dadb24c0bbabffe3c444550cabd13884b36870ed810250c0bc5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PageNotFoundModule-ff71632f17a3e64bde3955e833e971a2134de7f34cdcdc7d0fe2a9dbfca13b639bd6b40cd40c4dadb24c0bbabffe3c444550cabd13884b36870ed810250c0bc5"' :
                                            'id="xs-components-links-module-PageNotFoundModule-ff71632f17a3e64bde3955e833e971a2134de7f34cdcdc7d0fe2a9dbfca13b639bd6b40cd40c4dadb24c0bbabffe3c444550cabd13884b36870ed810250c0bc5"' }>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageNotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PageNotFoundRoutingModule.html" data-type="entity-link" >PageNotFoundRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-c5405709b889ff1f1d3bace11bdeae293c3b2869be63dc50593dd021e3cc0e95827c925847a05d7e4dde13e054b5a4aed834a098914c95e6a0eddbd606554c79"' : 'data-target="#xs-components-links-module-SharedModule-c5405709b889ff1f1d3bace11bdeae293c3b2869be63dc50593dd021e3cc0e95827c925847a05d7e4dde13e054b5a4aed834a098914c95e6a0eddbd606554c79"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-c5405709b889ff1f1d3bace11bdeae293c3b2869be63dc50593dd021e3cc0e95827c925847a05d7e4dde13e054b5a4aed834a098914c95e6a0eddbd606554c79"' :
                                            'id="xs-components-links-module-SharedModule-c5405709b889ff1f1d3bace11bdeae293c3b2869be63dc50593dd021e3cc0e95827c925847a05d7e4dde13e054b5a4aed834a098914c95e6a0eddbd606554c79"' }>
                                            <li class="link">
                                                <a href="components/BtnComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BtnComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TableLightComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableLightComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SharedModule-c5405709b889ff1f1d3bace11bdeae293c3b2869be63dc50593dd021e3cc0e95827c925847a05d7e4dde13e054b5a4aed834a098914c95e6a0eddbd606554c79"' : 'data-target="#xs-directives-links-module-SharedModule-c5405709b889ff1f1d3bace11bdeae293c3b2869be63dc50593dd021e3cc0e95827c925847a05d7e4dde13e054b5a4aed834a098914c95e6a0eddbd606554c79"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SharedModule-c5405709b889ff1f1d3bace11bdeae293c3b2869be63dc50593dd021e3cc0e95827c925847a05d7e4dde13e054b5a4aed834a098914c95e6a0eddbd606554c79"' :
                                        'id="xs-directives-links-module-SharedModule-c5405709b889ff1f1d3bace11bdeae293c3b2869be63dc50593dd021e3cc0e95827c925847a05d7e4dde13e054b5a4aed834a098914c95e6a0eddbd606554c79"' }>
                                        <li class="link">
                                            <a href="directives/StateDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StateDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-SharedModule-c5405709b889ff1f1d3bace11bdeae293c3b2869be63dc50593dd021e3cc0e95827c925847a05d7e4dde13e054b5a4aed834a098914c95e6a0eddbd606554c79"' : 'data-target="#xs-pipes-links-module-SharedModule-c5405709b889ff1f1d3bace11bdeae293c3b2869be63dc50593dd021e3cc0e95827c925847a05d7e4dde13e054b5a4aed834a098914c95e6a0eddbd606554c79"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-c5405709b889ff1f1d3bace11bdeae293c3b2869be63dc50593dd021e3cc0e95827c925847a05d7e4dde13e054b5a4aed834a098914c95e6a0eddbd606554c79"' :
                                            'id="xs-pipes-links-module-SharedModule-c5405709b889ff1f1d3bace11bdeae293c3b2869be63dc50593dd021e3cc0e95827c925847a05d7e4dde13e054b5a4aed834a098914c95e6a0eddbd606554c79"' }>
                                            <li class="link">
                                                <a href="pipes/TotalPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TotalPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TemplatesModule.html" data-type="entity-link" >TemplatesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TemplatesModule-0568e9be7f70e757663c22742f28b83cd20c67a0dcb907d33c317e349955abd2085afd2df04353d828c7d024a46bd41f5ef848374d09ed33bd0b8764e0d290e7"' : 'data-target="#xs-components-links-module-TemplatesModule-0568e9be7f70e757663c22742f28b83cd20c67a0dcb907d33c317e349955abd2085afd2df04353d828c7d024a46bd41f5ef848374d09ed33bd0b8764e0d290e7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TemplatesModule-0568e9be7f70e757663c22742f28b83cd20c67a0dcb907d33c317e349955abd2085afd2df04353d828c7d024a46bd41f5ef848374d09ed33bd0b8764e0d290e7"' :
                                            'id="xs-components-links-module-TemplatesModule-0568e9be7f70e757663c22742f28b83cd20c67a0dcb907d33c317e349955abd2085afd2df04353d828c7d024a46bd41f5ef848374d09ed33bd0b8764e0d290e7"' }>
                                            <li class="link">
                                                <a href="components/TemplateContainerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TemplateContainerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TemplateFullWidthComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TemplateFullWidthComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UiModule.html" data-type="entity-link" >UiModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UiModule-9844dd7598de9041031d441d1393ba5da5f4db58a72fb07630b682c802ad0962dc050aa949a8c6202d7c1f8d7221f6e43365e1befcc4dd6c1c5659e0cea5a750"' : 'data-target="#xs-components-links-module-UiModule-9844dd7598de9041031d441d1393ba5da5f4db58a72fb07630b682c802ad0962dc050aa949a8c6202d7c1f8d7221f6e43365e1befcc4dd6c1c5659e0cea5a750"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UiModule-9844dd7598de9041031d441d1393ba5da5f4db58a72fb07630b682c802ad0962dc050aa949a8c6202d7c1f8d7221f6e43365e1befcc4dd6c1c5659e0cea5a750"' :
                                            'id="xs-components-links-module-UiModule-9844dd7598de9041031d441d1393ba5da5f4db58a72fb07630b682c802ad0962dc050aa949a8c6202d7c1f8d7221f6e43365e1befcc4dd6c1c5659e0cea5a750"' }>
                                            <li class="link">
                                                <a href="components/UiComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UiComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Order.html" data-type="entity-link" >Order</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/OrdersService.html" data-type="entity-link" >OrdersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/OrderI.html" data-type="entity-link" >OrderI</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});