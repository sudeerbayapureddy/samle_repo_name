(function() {
    rivets.binders.input = {
        publishes: !0,
        routine: rivets.binders.value.routine,
        bind: function(a) {
            return $(a).bind("input.rivets", this.publish)
        },
        unbind: function(a) {
            return $(a).unbind("input.rivets")
        }
    }, rivets.configure({
        prefix: "rv",
        adapter: {
            subscribe: function(a, b, c) {
                return c.wrapped = function(a, b) {
                    return c(b)
                }, a.on("change:" + b, c.wrapped)
            },
            unsubscribe: function(a, b, c) {
                return a.off("change:" + b, c.wrapped)
            },
            read: function(a, b) {
                return "cid" === b ? a.cid : a.get(b)
            },
            publish: function(a, b, c) {
                return a.cid ? a.set(b, c) : a[b] = c
            }
        }
    })
}).call(this),
    function() {
        var a, b, c, d, e, f, g, h, i, j, k, l = {}.hasOwnProperty,
            m = function(a, b) {
                function c() {
                    this.constructor = a
                }
                for (var d in b) l.call(b, d) && (a[d] = b[d]);
                return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a
            };
        e = function(a) {
            function b() {
                return g = b.__super__.constructor.apply(this, arguments)
            }
            return m(b, a), b.prototype.sync = function() {}, b.prototype.indexInDOM = function() {
                var a, b = this;
                return a = $(".fb-field-wrapper").filter(function(a, c) {
                    return $(c).data("cid") === b.cid
                }), $(".fb-field-wrapper").index(a)
            }, b.prototype.is_input = function() {
                return null != c.inputFields[this.get(c.options.mappings.FIELD_TYPE)]
            }, b
        }(Backbone.DeepModel), d = function(a) {
            function b() {
                return h = b.__super__.constructor.apply(this, arguments)
            }
            return m(b, a), b.prototype.initialize = function() {
                return this.on("add", this.copyCidToModel)
            }, b.prototype.model = e, b.prototype.comparator = function(a) {
                return a.indexInDOM()
            }, b.prototype.copyCidToModel = function(a) {
                return a.attributes.cid = a.cid
            }, b
        }(Backbone.Collection), f = function(a) {
            function b() {
                return i = b.__super__.constructor.apply(this, arguments)
            }
            return m(b, a), b.prototype.className = "fb-field-wrapper", b.prototype.events = {
                "click .subtemplate-wrapper": "focusEditView",
                "click .js-duplicate": "duplicate",
                "click .js-clear": "clear"
            }, b.prototype.initialize = function(a) {
                return this.parentView = a.parentView, this.listenTo(this.model, "change", this.render), this.listenTo(this.model, "destroy", this.remove)
            }, b.prototype.render = function() {
                return this.$el.addClass("response-field-" + this.model.get(c.options.mappings.FIELD_TYPE)).data("cid", this.model.cid).html(c.templates["view/base" + (this.model.is_input() ? "" : "_non_input")]({
                    rf: this.model
                })), this
            }, b.prototype.focusEditView = function() {
                return this.parentView.createAndShowEditView(this.model)
            }, b.prototype.clear = function(a) {
                var b, d, e = this;
                switch (a.preventDefault(), a.stopPropagation(), b = function() {
                    return e.parentView.handleFormUpdate(), e.model.destroy()
                }, d = c.options.CLEAR_FIELD_CONFIRM, typeof d) {
                    case "string":
                        if (confirm(d)) return b();
                        break;
                    case "function":
                        return d(b);
                    default:
                        return b()
                }
            }, b.prototype.duplicate = function() {
                var a;
                return a = _.clone(this.model.attributes), delete a.id, a.label += " Copy", this.parentView.createField(a, {
                    position: this.model.indexInDOM() + 1
                })
            }, b
        }(Backbone.View), b = function(a) {
            function b() {
                return j = b.__super__.constructor.apply(this, arguments)
            }
            return m(b, a), b.prototype.className = "edit-response-field", b.prototype.events = {
                "click .js-add-option": "addOption",
                "click .js-remove-option": "removeOption",
                "click .js-default-updated": "defaultUpdated",
                "input .option-label-input": "forceRender"
            }, b.prototype.initialize = function(a) {
                return this.parentView = a.parentView, this.listenTo(this.model, "destroy", this.remove)
            }, b.prototype.change = function() {
                return $(document).trigger("model:change", this.model), this
            }, b.prototype.render = function() {
                return this.$el.html(c.templates["edit/base" + (this.model.is_input() ? "" : "_non_input")]({
                    rf: this.model
                })), rivets.bind(this.$el, {
                    model: this.model
                }), this
            }, b.prototype.remove = function() {
                return this.parentView.editView = void 0, this.parentView.$el.find('[data-target="#addField"]').click(), b.__super__.remove.apply(this, arguments)
            }, b.prototype.addOption = function(a) {
                var b, d, e, f;
                return b = $(a.currentTarget), d = this.$el.find(".option").index(b.closest(".option")), f = this.model.get(c.options.mappings.OPTIONS) || [], e = {
                    label: "",
                    checked: !1
                }, d > -1 ? f.splice(d + 1, 0, e) : f.push(e), this.model.set(c.options.mappings.OPTIONS, f), this.model.trigger("change:" + c.options.mappings.OPTIONS), this.forceRender()
            }, b.prototype.removeOption = function(a) {
                var b, d, e;
                return b = $(a.currentTarget), d = this.$el.find(".js-remove-option").index(b), e = this.model.get(c.options.mappings.OPTIONS), e.splice(d, 1), this.model.set(c.options.mappings.OPTIONS, e), this.model.trigger("change:" + c.options.mappings.OPTIONS), this.forceRender()
            }, b.prototype.defaultUpdated = function(a) {
                var b;
                return b = $(a.currentTarget), "checkboxes" !== this.model.get(c.options.mappings.FIELD_TYPE) && this.$el.find(".js-default-updated").not(b).attr("checked", !1).trigger("change"), this.forceRender()
            }, b.prototype.forceRender = function() {
                return this.model.trigger("change")
            }, b
        }(Backbone.View), a = function(a) {
            function e() {
                return k = e.__super__.constructor.apply(this, arguments)
            }
            return m(e, a), e.prototype.SUBVIEWS = [], e.prototype.events = {
                "click .js-save-form": "saveForm",
                "click .fb-tabs a": "showTab",
                "click .fb-add-field-types a": "addField",
                "mouseover .fb-add-field-types": "lockLeftWrapper",
                "mouseout .fb-add-field-types": "unlockLeftWrapper"
            }, e.prototype.initialize = function(a) {
                var b;
                return b = a.selector, this.formBuilder = a.formBuilder, this.bootstrapData = a.bootstrapData, null != b && this.setElement($(b)), this.collection = new d, this.collection.bind("add", this.addOne, this), this.collection.bind("reset", this.reset, this), this.collection.bind("change", this.handleFormUpdate, this), this.collection.bind("destroy add reset", this.hideShowNoResponseFields, this), this.collection.bind("destroy", this.ensureEditViewScrolled, this), this.render(), this.collection.reset(this.bootstrapData.fields), this.bindSaveEvent()
            }, e.prototype.bindSaveEvent = function() {
                var a = this;
                return this.formSaved = !0, this.saveFormButton = this.$el.find(".js-save-form"), this.saveFormButton.attr("disabled", !0).text(c.options.dict.ALL_CHANGES_SAVED), c.options.AUTOSAVE && setInterval(function() {
                    return a.saveForm.call(a)
                }, 5e3), $(window).bind("beforeunload", function() {
                    return a.formSaved ? void 0 : c.options.dict.UNSAVED_CHANGES
                })
            }, e.prototype.reset = function() {
                return this.$responseFields.html(""), this.addAll()
            }, e.prototype.render = function() {
                var a, b, d, e;
                for (this.$el.html(c.templates.page()), this.$fbLeft = this.$el.find(".fb-left"), this.$responseFields = this.$el.find(".fb-response-fields"), this.bindWindowScrollEvent(), this.hideShowNoResponseFields(), e = this.SUBVIEWS, b = 0, d = e.length; d > b; b++) a = e[b], new a({
                    parentView: this
                }).render();
                return this
            }, e.prototype.bindWindowScrollEvent = function() {
                var a = this;
                return $(window).on("scroll", function() {
                    var b, c;
                    if (a.$fbLeft.data("locked") !== !0 && (c = Math.max(0, $(window).scrollTop() - a.$el.offset().top), b = a.$responseFields.height(), !(0 > b))) return a.$fbLeft.css({
                        "margin-top": Math.min(b, c)
                    })
                })
            }, e.prototype.showTab = function(a) {
                var b, c, d;
                return b = $(a.currentTarget), d = b.data("target"), $(document).trigger("tabs:show", d), b.closest("li").addClass("active").siblings("li").removeClass("active"), $(d).addClass("active").siblings(".fb-tab-pane").removeClass("active"), "#editForm" === d ? void this.scrollLeftWrapper($("#editForm")) : ("#editField" !== d && this.unlockLeftWrapper(), "#editField" === d && !this.editView && (c = this.collection.models[0]) ? this.createAndShowEditView(c) : void 0)
            }, e.prototype.addOne = function(a, b, c) {
                var d, e;
                return e = new f({
                    model: a,
                    parentView: this
                }), null != c.$replaceEl ? c.$replaceEl.replaceWith(e.render().el) : null == c.position || -1 === c.position ? this.$responseFields.append(e.render().el) : 0 === c.position ? this.$responseFields.prepend(e.render().el) : (d = this.$responseFields.find(".fb-field-wrapper").eq(c.position))[0] ? d.before(e.render().el) : this.$responseFields.append(e.render().el)
            }, e.prototype.setSortable = function() {
                var a = this;
                return this.$responseFields.hasClass("ui-sortable") && this.$responseFields.sortable("destroy"), this.$responseFields.sortable({
                    forcePlaceholderSize: !0,
                    placeholder: "sortable-placeholder",
                    items: "> div:not('.response-field-recaptcha,.response-field-submit')",
                    stop: function(b, d) {
                        var e;
                        return d.item.data("field-type") && (e = a.collection.create(c.helpers.defaultFieldAttrs(d.item.data("field-type")), {
                            $replaceEl: d.item
                        }), a.createAndShowEditView(e)), a.handleFormUpdate(), !0
                    },
                    update: function(b, c) {
                        return c.item.data("field-type") ? void 0 : a.ensureEditViewScrolled()
                    }
                }).disableSelection()
            }, e.prototype.setDraggable = function() {
                var a, b = this;
                return a = this.$el.find("[data-field-type]"), a.draggable({
                    connectToSortable: this.$responseFields,
                    helper: function() {
                        var a;
                        return a = $("<div class='response-field-draggable-helper' />"), a.css({
                            width: b.$responseFields.width(),
                            height: "80px"
                        }), a
                    }
                })
            }, e.prototype.addAll = function() {
                return this.collection.each(this.addOne, this), this.setSortable()
            }, e.prototype.hideShowNoResponseFields = function() {
                return this.$el.find(".fb-no-response-fields")[this.collection.length > 0 ? "hide" : "show"]()
            }, e.prototype.addField = function(a) {
                var b;
                return b = $(a.currentTarget).data("field-type"), c.helpers.canAdd(b) ? this.createField(c.helpers.defaultFieldAttrs(b)) : void alert("This field already exists. Can't add more!")
            }, e.prototype.createField = function(a, b) {
                var c, d;
                return c = this.getCreateFieldPosition(a, b), null !== c && (b = _.extend(b || {}, {
                    position: c
                })), d = this.collection.create(a, b), this.createAndShowEditView(d), this.handleFormUpdate()
            }, e.prototype.getCreateFieldPosition = function() {
                var a, b, c, d, e;
                for (this.collection.sort(), c = this.collection.toArray(), a = void 0, d = c.length, b = void 0, e = void 0, a = 0; d > a;) {
                    if (b = c[a], e = b.get("field_type"), -1 !== ",recaptcha,submit,".indexOf("," + e + ",")) return a;
                    a++
                }
                return null
            }, e.prototype.createAndShowEditView = function(a) {
                var c, d;
                if (d = this.$el.find(".fb-field-wrapper").filter(function() {
                        return $(this).data("cid") === a.cid
                    }), d.addClass("editing").siblings(".fb-field-wrapper").removeClass("editing"), this.editView) {
                    if (this.editView.model.cid === a.cid) return this.$el.find('.fb-tabs a[data-target="#editField"]').click(), void this.scrollLeftWrapper(d);
                    this.editView.remove()
                }
                return this.editView = new b({
                    model: a,
                    parentView: this
                }), c = this.editView.render().$el, this.$el.find(".fb-edit-field-wrapper").html(c), this.$el.find('.fb-tabs a[data-target="#editField"]').click(), this.scrollLeftWrapper(d), this
            }, e.prototype.ensureEditViewScrolled = function() {
                return this.editView ? this.scrollLeftWrapper($(".fb-field-wrapper.editing")) : void 0
            }, e.prototype.scrollLeftWrapper = function(a) {
                var b = this;
                return this.unlockLeftWrapper(), a[0] ? $.scrollWindowTo(this.$el.offset().top + a.offset().top - this.$responseFields.offset().top, 200, function() {
                    return b.lockLeftWrapper()
                }) : void 0
            }, e.prototype.lockLeftWrapper = function() {
                return this.$fbLeft.data("locked", !0)
            }, e.prototype.unlockLeftWrapper = function() {
                return this.$fbLeft.data("locked", !1)
            }, e.prototype.handleFormUpdate = function() {
                return this.updatingBatch ? void 0 : (this.formSaved = !1, this.saveFormButton.removeAttr("disabled").text(c.options.dict.SAVE_FORM))
            }, e.prototype.saveForm = function() {
                return this.formSaved = !0, this.saveFormButton.attr("disabled", !0).text(c.options.dict.ALL_CHANGES_SAVED), $(document).trigger("fields:change", this.collection)
            }, e.prototype.doAjaxSave = function(a) {
                var b = this;
                return $.ajax({
                    url: c.options.HTTP_ENDPOINT,
                    type: c.options.HTTP_METHOD,
                    data: a,
                    contentType: "application/json",
                    success: function(a) {
                        var c, d, e, f;
                        for (b.updatingBatch = !0, d = 0, e = a.length; e > d; d++) c = a[d], null != (f = b.collection.get(c.cid)) && f.set({
                            id: c.id
                        }), b.collection.trigger("sync");
                        return b.updatingBatch = void 0
                    }
                })
            }, e
        }(Backbone.View), c = function() {
            function b(b) {
                var c;
                null == b && (b = {}), _.extend(this, Backbone.Events), c = _.extend(b, {
                    formBuilder: this
                }), this.mainView = new a(c)
            }
            return b.helpers = {
                defaultFieldAttrs: function(a) {
                    var c, d;
                    return c = {}, c[b.options.mappings.LABEL] = "Untitled", c[b.options.mappings.FIELD_TYPE] = a, c[b.options.mappings.REQUIRED] = !0, c.field_options = {
                        images: {
                            urls: "",
                            slideshow: !1
                        }
                    }, ("function" == typeof(d = b.fields[a]).defaultAttributes ? d.defaultAttributes(c) : void 0) || c
                },
                onlyOne: function(a) {
                    var c;
                    return c = b.fields[a].max, "undefined" != typeof c && 1 === c
                },
                canAdd: function(a) {
                    var c;
                    return c = b.fields[a].max, "undefined" == typeof c ? !0 : $(".fb-response-fields .response-field-" + a).length < c
                },
                minOne: function(a) {
                    var c;
                    return c = b.fields[a].min, "undefined" != typeof c && 1 === c
                },
                simple_format: function(a) {
                    return null != a ? a.replace(/\n/g, "<br />") : void 0
                }
            }, b.options = {
                BUTTON_CLASS: "fb-button",
                HTTP_ENDPOINT: "",
                HTTP_METHOD: "POST",
                AUTOSAVE: !0,
                CLEAR_FIELD_CONFIRM: !1,
                mappings: {
                    SIZE: "field_options.size",
                    UNITS: "field_options.units",
                    LABEL: "label",
                    FIELD_TYPE: "field_type",
                    REQUIRED: "required",
                    ADMIN_ONLY: "admin_only",
                    OPTIONS: "field_options.options",
                    DESCRIPTION: "field_options.description",
                    INCLUDE_OTHER: "field_options.include_other_option",
                    INCLUDE_BLANK: "field_options.include_blank_option",
                    INTEGER_ONLY: "field_options.integer_only",
                    MIN: "field_options.min",
                    MAX: "field_options.max",
                    MINLENGTH: "field_options.minlength",
                    MAXLENGTH: "field_options.maxlength",
                    LENGTH_UNITS: "field_options.min_max_length_units"
                },
                dict: {
                    ALL_CHANGES_SAVED: "All changes saved",
                    SAVE_FORM: "Save form",
                    UNSAVED_CHANGES: "You have unsaved changes. If you leave this page, you will lose those changes!"
                }
            }, b.fields = {}, b.inputFields = {}, b.nonInputFields = {}, b.registerField = function(a, c) {
                var d, e, f, g;
                for (g = ["view", "edit"], e = 0, f = g.length; f > e; e++) d = g[e], c[d] = _.template(c[d]);
                return c.field_type = a, b.fields[a] = c, "non_input" === c.type ? b.nonInputFields[a] = c : b.inputFields[a] = c
            }, b
        }(), window.Formbuilder = c, "undefined" != typeof module && null !== module ? module.exports = c : window.Formbuilder = c
    }.call(this),
    function() {
        Formbuilder.registerField("checkboxes", {
            order: 3,
            view: "<%= Formbuilder.templates['view/checkboxes']({rf: rf}) %>",
            edit: "<%= Formbuilder.templates['edit/options']({ includeOther: true }) %>",
            addButton: '<span class="symbol"><span class="fa fa-square-o"></span></span> Checkboxes',
            defaultAttributes: function(a) {
                return a.label = "Checkboxes", a.field_options.options = [{
                    label: "Option 1",
                    checked: !1
                }, {
                    label: "Option 2",
                    checked: !1
                }, {
                    label: "Option 3",
                    checked: !1
                }], a
            }
        })
    }.call(this),
    function() {
        Formbuilder.registerField("date", {
            order: 11,
            view: "<%= Formbuilder.templates['view/date']({rf: rf}) %>",
            edit: "<%= Formbuilder.templates['edit/date']() %>",
            addButton: '<span class="symbol"><span class="fa fa-calendar"></span></span> Date',
            defaultAttributes: function(a) {
                return a.label = "Date", a.field_options.addon = {
                    rightIcon: "glyphicon glyphicon-th",
                    rightText: ""
                }, a
            }
        })
    }.call(this),
    function() {
        Formbuilder.registerField("dropdown", {
            order: 5,
            view: "<%= Formbuilder.templates['view/dropdown']({rf: rf}) %>",
            edit: "<%= Formbuilder.templates['edit/options']({ includeBlank: true }) %>\n<%= Formbuilder.templates['edit/input-group-addon']() %>",
            addButton: '<span class="symbol"><span class="fa fa-caret-down"></span></span> Dropdown',
            defaultAttributes: function(a) {
                return a.label = "Select", a.field_options.options = [{
                    label: "- Select -",
                    value: "#novalue",
                    checked: !1
                }, {
                    label: "Option 1",
                    checked: !1
                }, {
                    label: "Option 2",
                    checked: !1
                }, {
                    label: "Option 3",
                    checked: !1
                }], a.field_options.include_blank_option = !1, a
            }
        })
    }.call(this),
    function() {
        Formbuilder.registerField("email", {
            order: 15,
            view: "<%= Formbuilder.templates['view/text']({rf: rf}) %>",
            edit: "<%= Formbuilder.templates['edit/email_field_edit']() %>",
            addButton: '<span class="symbol"><span class="fa fa-envelope-o"></span></span> Email',
            defaultAttributes: function(a) {
                return a.label = "Email", a.field_options.sender = !1, a.field_options.validators = {
                    email: {
                        enabled: !0
                    }
                }, a
            }
        })
    }.call(this),
    function() {
        Formbuilder.registerField("number", {
            order: 12,
            view: "<%= Formbuilder.templates['view/number']({rf: rf}) %>",
            edit: "<%= Formbuilder.templates['edit/number_spinner']({rf: rf}) %>\n<%= Formbuilder.templates['edit/input-group-addon']() %>",
            addButton: '<span class="symbol"><span class="fa fa-number">123</span></span> Number',
            defaultAttributes: function(a) {
                return a.label = "Number", a.field_options.numSpinner = {
                    enabled: !1
                }, a.field_options.validators = {
                    number: {
                        enabled: !0
                    }
                }, a
            }
        })
    }.call(this),
    function() {
        Formbuilder.registerField("paragraph", {
            order: 2,
            view: "<%= Formbuilder.templates['view/input-group-addon']( { position: 'left', rf: rf} ) %>\n  <textarea class='form-control' placeholder='<%=rf.get(Formbuilder.options.mappings.PLACEHOLDER)%>'></textarea>\n<%= Formbuilder.templates['view/input-group-addon']( { position: 'right', rf: rf} ) %>",
            edit: "<%= Formbuilder.templates['edit/input-group-addon']() %>",
            addButton: '<span class="symbol">&#182;</span> Paragraph',
            defaultAttributes: function(a) {
                return a.label = "Paragraph", a.field_options.size = "small", a
            }
        })
    }.call(this),
    function() {
        Formbuilder.registerField("radio", {
            order: 4,
            view: "<%= Formbuilder.templates['view/radio']({rf: rf}) %>",
            edit: "<%= Formbuilder.templates['edit/options']({ includeOther: true }) %>",
            addButton: '<span class="symbol"><span class="fa fa-circle-o"></span></span> Multiple Choice',
            defaultAttributes: function(a) {
                return a.label = "Multiple Choice", a.field_options.options = [{
                    label: "Option 1",
                    checked: !1
                }, {
                    label: "Option 2",
                    checked: !1
                }, {
                    label: "Option 3",
                    checked: !1
                }], a
            }
        })
    }.call(this),
    function() {
        Formbuilder.registerField("submit", {
            order: 100,
            type: "non_input",
            max: 1,
            min: 1,
            view: "<%= Formbuilder.templates['view/submit']({rf: rf}) %>",
            edit: "<%= Formbuilder.templates['edit/submit']({rf: rf}) %>",
            addButton: '<span class="symbol"><span class="fa fa-arrow-circle-o-right"></span></span> Submit',
            defaultAttributes: function(a) {
                return a.label = "Submit Button", a.labelHide = !0, a.submit = {
                    label: "Submit",
                    icon: "",
                    checkRequiredFields: ""
                }, a
            }
        })
    }.call(this),
    function() {
        Formbuilder.registerField("text", {
            order: 1,
            view: "<%= Formbuilder.templates['view/text']({rf: rf}) %>",
            edit: "<%= Formbuilder.templates['edit/text']() %>",
            addButton: "<span class='symbol'><span class='fa fa-font'></span></span> Text",
            defaultAttributes: function(a) {
                return a.label = "Textbox", a.field_options.size = "small", a.field_options.addon = {}, a
            }
        })
    }.call(this),
     this.Formbuilder = this.Formbuilder || {}, this.Formbuilder.templates = this.Formbuilder.templates || {}, this.Formbuilder.templates["edit/admin"] = function(obj) {
        obj || (obj = {}); {
            var __p = "";
            _.escape
        }
        with(obj) __p += '<section id=\'adminConfig\'>\r\n<h4>Admin Panel</h4>\r\n<div class="content">\r\n\r\n  <label>Users:<input type="text" data-rv-input="model.admin.users" placeholder="email:password">\r\n  <div class="hints">Use comma ( , ) to separate multiple admin users, like : email1:password1, email2:password2, email3:password3</div>\r\n  </label>\r\n\r\n  <label>\r\n  	<input type="radio" name="dataDelivery" data-rv-checked="model.admin.dataDelivery" value="emailAndFile">\r\n  	Send email and collect data\r\n  </label>\r\n  <label>\r\n  	<input type="radio" name="dataDelivery" data-rv-checked="model.admin.dataDelivery" value="fileOnly">\r\n  	Collect data only\r\n  </label>\r\n  <label>\r\n  	<input type="radio" name="dataDelivery" data-rv-checked="model.admin.dataDelivery" value="emailOnly">\r\n  	Send email only\r\n  </label>\r\n\r\n</div>\r\n</section>\r\n';
        return __p
    }, this.Formbuilder.templates["edit/auto_response"] = function(obj) {
        obj || (obj = {}); {
            var __p = "";
            _.escape, Array.prototype.join
        }
        with(obj) __p += '<section id=\'autoResponseConfig\'>\r\n<h4>Auto-Response Email</h4>\r\n<div class="content">\r\n\r\n  <label>Subject:<input type="text" data-rv-input="model.autoResponse.subject" data-toggle=\'popover\' data-content-type=\'variable\'></label>\r\n  <label>Template: <a href=\'#\' class=\'insertTemplate\'>insert example</a><textarea class="template" data-rv-input="model.autoResponse.template" placeholder="Customize your email message, you can also use variables." data-toggle=\'popover\' data-content-type=\'variable\'></textarea></label>\r\n\r\n  <a href="#" class="moreOptions">More options <span class=\'symbol\'><span class=\'fa fa-caret-right\'></span></a>\r\n  <div class="moreOptions">\r\n\r\n    <label>Reply To Email:<input type="text" data-rv-input="model.autoResponse.replyTo" placeholder="replyToMe@yourwebsite.com"></label>\r\n    <label>Name:<input type="text" data-rv-input="model.autoResponse.replyToName" data-toggle=\'popover\' data-content-type=\'variable\'></label>\r\n\r\n  </div>\r\n<!-- \r\n  <label>Attach files to email:<input type="text" data-rv-input="model.autoResponse.files"></label>\r\n -->\r\n<textarea class="defaultTemplate" wrap="off" style="display: none;">\r\nDear {sender.fullname},\r\n\r\nThank you for filling out the form. Here is the copy of your data:\r\n{dataTable}\r\n\r\nWe will contact you shortly.\r\n\r\nBest Regards,\r\n{HTTP_HOST}\r\n\r\n\r\nReference ID: {AutoID}\r\nYour IP: {IP}\r\nDate: {Date}\r\nTime: {Time}\r\n</textarea>\r\n\r\n</div>\r\n</section>\r\n', setTimeout(function() {
            $("#autoResponseConfig a.insertTemplate").click(function(a) {
                a.preventDefault();
                var b = $("#autoResponseConfig textarea.defaultTemplate").val();
                return $("#autoResponseConfig textarea.template").css("height", "250px").val(b).trigger("change"), Formbuilder.formSettingModel.set("autoResponse.template", b), !1
            })
        }, 250);
        return __p
    }, this.Formbuilder.templates["edit/autocomplete"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape, Array.prototype.join
        }
        with(obj) __p += "<section class=\"options\">\r\n  <h4>Options<span class='symbol'><span class='fa fa-caret-right'></span></span></h4>\r\n  <div class=\"content expand\">\r\n	" + (null == (__t = Formbuilder.templates["edit/select_preset_json"]()) ? "" : __t) + '\r\n    <button class="editOptions">Edit Options</button>\r\n	<label>\r\n	  <input type=\'checkbox\' data-rv-checked="model.field_options.defaultSuggestion" />\r\n	  Show default suggestion\r\n	</label>\r\n  </div>\r\n</section>\r\n\r\n' + (null == (__t = Formbuilder.templates["edit/input-group-addon"]()) ? "" : __t) + "\r\n\r\n", setTimeout(function() {
            $(document).trigger("handsontable:render_options", Formbuilder.rf)
        }, 350);
        return __p
    }, this.Formbuilder.templates["edit/base"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape, Array.prototype.join
        }
        with(obj) {
            __p += "\r\n", Formbuilder.rf = rf;
            var type = rf.get(Formbuilder.options.mappings.FIELD_TYPE);
            __p += "\r\n" + (null == (__t = Formbuilder.templates["edit/base_header"]()) ? "" : __t) + "\r\n" + (null == (__t = Formbuilder.templates["edit/common"]()) ? "" : __t) + "\r\n" + (null == (__t = Formbuilder.includePlaceholder(type)) ? "" : __t) + "\r\n" + (null == (__t = Formbuilder.templates["edit/validators"]()) ? "" : __t) + "\r\n" + (null == (__t = Formbuilder.fields[type].edit({
                rf: rf
            })) ? "" : __t) + "\r\n", setTimeout(function() {
                $("div.content.expand").siblings("h4").click()
            }, 250)
        }
        return __p
    }, this.Formbuilder.templates["edit/base_header"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape
        }
        with(obj) __p += "<div class='fb-field-label'>\r\n  <span data-rv-text=\"model." + (null == (__t = Formbuilder.options.mappings.LABEL) ? "" : __t) + "\"></span>\r\n  <code class='field-type' data-rv-text='model." + (null == (__t = Formbuilder.options.mappings.FIELD_TYPE) ? "" : __t) + "'></code>\r\n  <span class='fa fa-arrow-right pull-right'></span>\r\n</div>";
        return __p
    }, this.Formbuilder.templates["edit/base_non_input"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape
        }
        with(obj) __p += (null == (__t = Formbuilder.templates["edit/base_header"]()) ? "" : __t) + "\r\n" + (null == (__t = Formbuilder.fields[rf.get(Formbuilder.options.mappings.FIELD_TYPE)].edit({
            rf: rf
        })) ? "" : __t) + "\r\n";
        return __p
    }, this.Formbuilder.templates["edit/checkboxes"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape
        }
        with(obj) __p += '<label>\r\n  <input type=\'checkbox\' data-rv-checked="model.field_options.validators.required.enabled" />\r\n  Required\r\n</label>\r\n<div class="validator-option" id="validator-option-required" data-rv-show="model.field_options.validators.required.enabled">\r\n    <input type="text" data-rv-value="model.field_options.validators.required.msg | validatorMsg required" placeholder="This field is required.">\r\n</div>\r\n\r\n<!-- label>\r\n  <input type=\'checkbox\' data-rv-checked=\'model.' + (null == (__t = Formbuilder.options.mappings.ADMIN_ONLY) ? "" : __t) + "' />\r\n  Admin only\r\n</label -->";
        return __p
    }, this.Formbuilder.templates["edit/common"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape
        }
        with(obj) __p += "\r\n<div class='fb-edit-section-header'>Label <span class='fb-edit-field-id'>Field Id: " + (null == (__t = Formbuilder.rf.get("cid")) ? "" : __t) + "</span></div>\r\n\r\n<div class='fb-common-wrapper'>\r\n  <div class='fb-label-description'>\r\n    " + (null == (__t = Formbuilder.templates["edit/label_description"]()) ? "" : __t) + "\r\n  </div>\r\n  <div class='fb-common-checkboxes'>\r\n    " + (null == (__t = Formbuilder.templates["edit/checkboxes"]()) ? "" : __t) + "\r\n  </div>\r\n  <div class='fb-clear'></div>\r\n</div>\r\n";
        return __p
    }, this.Formbuilder.templates["edit/common_non_input"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape
        }
        with(obj) __p += "<div class='fb-edit-section-header'>Label <span class='fb-edit-field-id'>Field Id: " + (null == (__t = rf.get("cid")) ? "" : __t) + "</span></div>\r\n<div class='fb-common-wrapper'>\r\n  <div class='fb-label-description'>\r\n    " + (null == (__t = Formbuilder.templates["edit/label_description"]()) ? "" : __t) + "\r\n  </div>\r\n</div>\r\n";
        return __p
    }, this.Formbuilder.templates["edit/creditcard"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape, Array.prototype.join
        }
        with(obj) {
            __p += "<div class='fb-edit-section-header'>Label <span class='fb-edit-field-id'>Field Id: " + (null == (__t = rf.get("cid")) ? "" : __t) + "</span></div>\r\n<div class='fb-common-wrapper'>\r\n  <div class='fb-label-description'>\r\n	<label style=\"display: inline-block;width: 150px;\">\r\n	  <input type='checkbox' data-rv-checked='model." + (null == (__t = Formbuilder.options.mappings.HIDDEN) ? "" : __t) + '\' style="width:16px;" title="Hide the entire field"/>\r\n	  Hide whole field\r\n	</label>\r\n  </div>\r\n</div>\r\n\r\n<section class="creditcard">\r\n';
            var cc = "model.subfields";
            __p += "\r\n	<label>\r\n		Labels\r\n		<input type='text' data-rv-input='" + (null == (__t = cc) ? "" : __t) + ".ccNumber.label' placeholder=\"Card number\" />\r\n		<input type='text' data-rv-input='" + (null == (__t = cc) ? "" : __t) + ".ccFullname.label' placeholder=\"Name on card\" />\r\n		<input type='text' data-rv-input='" + (null == (__t = cc) ? "" : __t) + ".ccExpiryDate.label' placeholder=\"Expiration date\" />\r\n		<input type='text' data-rv-input='" + (null == (__t = cc) ? "" : __t) + ".ccCVC.label' placeholder=\"Card CVC\" />\r\n	</label>\r\n\r\n	<label>\r\n		Validation error message\r\n		<input type='text' data-rv-input='" + (null == (__t = cc) ? "" : __t) + ".ccNumber.field_options.validators.required.msg' placeholder=\"Invalid credit card number\" />\r\n		<input type='text' data-rv-input='" + (null == (__t = cc) ? "" : __t) + ".ccExpiryDate.field_options.validators.required.msg' placeholder=\"Invalid expiration date\" />\r\n		<input type='text' data-rv-input='" + (null == (__t = cc) ? "" : __t) + '.ccCVC.field_options.validators.required.msg\' placeholder="Invalid CVC code" />\r\n	</label>\r\n\r\n</section>'
        }
        return __p
    }, this.Formbuilder.templates["edit/date"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape, Array.prototype.join
        }
        with(obj) {
            __p += "\r\n\r\n<section class=\"date\">\r\n<h4>Date options<span class='symbol'><span class='fa fa-caret-right'></span></h4>\r\n<div class=\"content expand\">\r\n\r\n";
            var date = "model." + Formbuilder.options.mappings.DATE;
            console.log(date), __p += "\r\n\r\n<!--\r\n	<label>\r\n		Type\r\n	    <select data-rv-value='" + (null == (__t = date) ? "" : __t) + '.type\'>\r\n	      <option value="date">Generic Date</option>\r\n	      <option value="dob">Date of Birth</option>\r\n	      <option value="cc_expiry">Credit Card Expiration Date</option>\r\n	    </select>\r\n	</label>\r\n\r\n 	<label>\r\n		<input type=\'checkbox\' data-rv-checked=\'' + (null == (__t = date) ? "" : __t) + ".usePicker' />Use date picker\r\n	</label>\r\n	\r\n	<div data-rv-show=\"" + (null == (__t = date) ? "" : __t) + ".usePicker\">\r\n -->	\r\n	<div>\r\n	<label>\r\n		Start date\r\n		<input type='text' class=\"datepicker startDate\" data-rv-input='" + (null == (__t = date) ? "" : __t) + ".startDate | 0d ' placeholder=\"0d\" />\r\n		<div class=\"hints\">\r\n			The earliest date that may be selected; All earlier dates will be disabled. The date can be <b>dynamic</b>. For example: <b>+0d</b> is for current date, <b>+7d</b> means 7 days from current date, etc...\r\n		</div>\r\n	</label>\r\n\r\n	<label>\r\n		End date\r\n		<input type='text' data-rv-input='" + (null == (__t = date) ? "" : __t) + '.endDate\' placeholder="0d" />\r\n		<div class="hints">\r\n			The latest date that may be selected; All later dates will be disabled. The date can be <b>dynamic</b>. For example: <b>+0d</b> is for current date, <b>+7d</b> means 7 days from current date, etc...\r\n		</div>\r\n	</label>\r\n\r\n	<label>\r\n		Format\r\n		<input type=\'text\' class="format" data-rv-input=\'' + (null == (__t = date) ? "" : __t) + '.format\' />\r\n	  	<div class="hints">\r\n			<p>The date format, combination of d, dd, D, DD, m, mm, M, MM, yy, yyyy.</p>\r\n			<ul class="simple">\r\n				<li>d, dd: Numeric date, no leading zero and leading zero, respectively.  Eg, 5, 05.</li>\r\n				<li>D, DD: Abbreviated and full weekday names, respectively.  Eg, Mon, Monday.</li>\r\n				<li>m, mm: Numeric month, no leading zero and leading zero, respectively.  Eg, 7, 07.</li>\r\n				<li>M, MM: Abbreviated and full month names, respectively.  Eg, Jan, January</li>\r\n				<li>yy, yyyy: 2- and 4-digit years, respectively.  Eg, 12, 2012.</li>\r\n			</ul>\r\n	  	</div>\r\n	</label>\r\n\r\n	<a href="#" class="moreOptions">More options <span class=\'symbol\'><span class=\'fa fa-caret-right\'></span></a>\r\n	<div class="moreOptions">\r\n	<label>\r\n		Days of week disabled\r\n        <label><input type="checkbox" name="daysOfWeekDisabled" value="0" data-rv-checked=\'' + (null == (__t = date) ? "" : __t) + '.daysOfWeekDisabled.d0\'>Sunday</label>\r\n        <label><input type="checkbox" name="daysOfWeekDisabled" value="1" data-rv-checked=\'' + (null == (__t = date) ? "" : __t) + '.daysOfWeekDisabled.d1\'>Monday</label>\r\n        <label><input type="checkbox" name="daysOfWeekDisabled" value="2" data-rv-checked=\'' + (null == (__t = date) ? "" : __t) + '.daysOfWeekDisabled.d2\'>Tuesday</label>\r\n        <label><input type="checkbox" name="daysOfWeekDisabled" value="3" data-rv-checked=\'' + (null == (__t = date) ? "" : __t) + '.daysOfWeekDisabled.d3\'>Wednesday</label>\r\n        <label><input type="checkbox" name="daysOfWeekDisabled" value="4" data-rv-checked=\'' + (null == (__t = date) ? "" : __t) + '.daysOfWeekDisabled.d4\'>Thursday</label>\r\n        <label><input type="checkbox" name="daysOfWeekDisabled" value="5" data-rv-checked=\'' + (null == (__t = date) ? "" : __t) + '.daysOfWeekDisabled.d5\'>Friday</label>\r\n        <label><input type="checkbox" name="daysOfWeekDisabled" value="6" data-rv-checked=\'' + (null == (__t = date) ? "" : __t) + ".daysOfWeekDisabled.d6'>Saturday</label>\r\n	</label>\r\n\r\n	<label>\r\n		Start view\r\n	    <select data-rv-value='" + (null == (__t = date) ? "" : __t) + '.startView\'>\r\n	      <option value="0">month</option>\r\n	      <option value="1">year</option>\r\n	      <option value="2">decade</option>\r\n	    </select>\r\n	</label>\r\n\r\n	<label>\r\n		Min view mode\r\n	    <select data-rv-value=\'' + (null == (__t = date) ? "" : __t) + '.minViewMode\'>\r\n	      <option value="0">days</option>\r\n	      <option value="1">months</option>\r\n	      <option value="2">years</option>\r\n	    </select>\r\n  	</label>          \r\n\r\n	<label>\r\n		Multiple date\r\n	    <select data-rv-value=\'' + (null == (__t = date) ? "" : __t) + '.multidate\'>\r\n	      <option value="false">Not allowed</option>\r\n	      <option value="true">Allow Multiple</option>\r\n	      <option value="2">2 Days</option>\r\n	      <option value="3">3 Days</option>\r\n	      <option value="4">4 Days</option>\r\n	      <option value="5">5 Days</option>\r\n	      <option value="6">6 Days</option>\r\n	      <option value="7">7 Days</option>\r\n	    </select>\r\n  	</label>\r\n\r\n	<label for="multidateSeparator">\r\n		Multidate separator\r\n	    <input type="text" data-rv-value=\'' + (null == (__t = date) ? "" : __t) + ".multidateSeparator' placeholder=\",\">\r\n  	</label>\r\n\r\n	<label>\r\n		Week start\r\n		<select data-rv-value='" + (null == (__t = date) ? "" : __t) + '.weekStart\'>\r\n			<option value=""></option>\r\n			<option value="0">Sunday</option>\r\n			<option value="1">Monday</option>\r\n			<option value="2">Tuesday</option>\r\n			<option value="3">Wednesday</option>\r\n			<option value="4">Thursday</option>\r\n			<option value="5">Friday</option>\r\n			<option value="6">Saturday</option>\r\n		</select>\r\n	</label>\r\n	</div>\r\n	</div>\r\n\r\n</div>\r\n</section>\r\n\r\n' + (null == (__t = Formbuilder.templates["edit/input-group-addon"]()) ? "" : __t) + "\r\n\r\n",
                setTimeout(function() {
                    var a = [{
                        value: "mm/dd/yyyy",
                        label: "mm/dd/yyyy"
                    }, {
                        value: "dd/mm/yyyy",
                        label: "dd/mm/yyyy"
                    }, {
                        value: "yyyy-mm-dd",
                        label: "yyyy-mm-dd"
                    }, {
                        value: "dd-M-yyyy",
                        label: "dd-M-yyyy Eg, 25-Dec-2015"
                    }, {
                        value: "dd-MM-yyyy",
                        label: "dd-MM-yyyy Eg, 25-December-2015"
                    }, {
                        value: "DD, MM d, yyyy",
                        label: "DD, MM d, yyyy Eg, Friday, December 25, 2015"
                    }];
                    $(document).trigger("setupAutoComplete", {
                        selector: "section.date input.format",
                        attrId: "field_options.date.format",
                        source: a
                    });
                    var b = [{
                        value: "0d",
                        label: "Today"
                    }, {
                        value: "+7d",
                        label: "7 Days later"
                    }];
                    $(document).trigger("setupAutoComplete", {
                        selector: "section.date input.startDate",
                        attrId: "field_options.date.startDate",
                        source: b
                    })
                }, 350)
        }
        return __p
    }, this.Formbuilder.templates["edit/email"] = function(obj) {
        obj || (obj = {}); {
            var __p = "";
            _.escape, Array.prototype.join
        }
        with(obj) __p += '<section id=\'emailConfig\'>\r\n<h4>Email Message</h4>\r\n<div class="content expand">\r\n\r\n  <label>To Email:<input type="text" data-rv-input="model.email.to" placeholder="Email for receiving form data"></label>\r\n\r\n  <label>Subject:<input type="text" data-rv-input="model.email.subject" data-toggle=\'popover\' data-content-type=\'variable\'></label>\r\n\r\n  <a href="#" class="moreOptions">More options <span class=\'symbol\'><span class=\'fa fa-caret-right\'></span></a>\r\n  <div class="moreOptions">\r\n\r\n    <label>Template: <a href=\'#\' class=\'insertTemplate\'>insert example</a><textarea class="template" data-rv-input=\'model.email.template\'  placeholder="Customize your email message, you can also use variables." data-toggle=\'popover\' data-content-type=\'variable\'></textarea>\r\n    </label>\r\n\r\n    <label>Name of Email:<input type="text" data-rv-input="model.email.fromName" placeholder="Your Name or Company Name"  data-toggle=\'popover\' data-content-type=\'variable\'>\r\n    </label>\r\n\r\n    <label>CC:<input type="text" data-rv-input="model.email.cc">\r\n    <div class="hints">Use comma ( , ) to separate multiple emails, like : a@a.com, b@b.com, c@c.com</div>\r\n    </label>\r\n\r\n    <label>BCC:<input type="text" data-rv-input="model.email.bcc">\r\n    <div class="hints">Use comma ( , ) to separate multiple emails, like : a@a.com, b@b.com, c@c.com</div>\r\n    </label>\r\n\r\n  </div>\r\n\r\n\r\n<textarea class="defaultTemplate" wrap="off" style="display: none;">\r\nYou receive an email from {sender.fullname}.\r\n\r\nThe web form data:\r\n{dataTable}\r\n\r\nReference ID: {AutoID}\r\nIP: {IP}\r\nDate: {Date}\r\nTime: {Time}\r\nWebsite: {HTTP_HOST}\r\nReferer: {HTTP_REFERER}\r\n</textarea>\r\n\r\n</div>\r\n</section>\r\n', setTimeout(function() {
            $("#emailConfig a.insertTemplate").click(function(a) {
                a.preventDefault();
                var b = $("#emailConfig textarea.defaultTemplate").val();
                return $("#emailConfig textarea.template").css("height", "250px").val(b).trigger("change"), Formbuilder.formSettingModel.set("email.template", b), !1
            })
        }, 250);
        return __p
    }, this.Formbuilder.templates["edit/email_field_edit"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape
        }
        with(obj) __p += (null == (__t = Formbuilder.templates["edit/input-group-addon"]()) ? "" : __t) + '\r\n<br style="margin-top: 8px;">\r\n<label>\r\n  <input type=\'checkbox\' data-rv-checked="model.' + (null == (__t = Formbuilder.options.mappings.SENDER) ? "" : __t) + "\" />\r\n  Is form sender's Email\r\n</label>\r\n";
        return __p
    }, this.Formbuilder.templates["edit/file"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape, Array.prototype.join
        }
        with(obj) {
            __p += "<section class=\"fileUpload\">\r\n<h4>File options<span class='symbol'><span class='fa fa-caret-right'></span></span></span></h4>\r\n<div class=\"content expand\">\r\n\r\n";
            var file = "model." + Formbuilder.options.mappings.FILE;
            __p += '\r\n\r\n<label>\r\n	Maximum file size\r\n	<input type="text" data-rv-value="' + (null == (__t = file) ? "" : __t) + '.maxFileSize" style="width:60px;" /> KB\r\n</label>\r\n\r\n<label>\r\n	Mail file as link if file size > \r\n	<input type="text" data-rv-value="' + (null == (__t = file) ? "" : __t) + '.fileToLinkSize" style="width:60px;" /> KB\r\n</label>\r\n\r\n<label>\r\n	Allowed file extensions:\r\n	<input type="text" class="extensions" data-rv-value="' + (null == (__t = file) ? "" : __t) + '.allowedFileExtensions" placeholder="jpg,jpeg,gif,png,bmp"/>\r\n</label>\r\n\r\n</div>\r\n</section>\r\n', setTimeout(function() {
                var a = [{
                    value: "png,jpg,jpeg,svg,bmp,gif,tif,tiff,raw,nef,cr2,crw,dng,srf,arw",
                    label: "Images"
                }, {
                    value: "docx,xlsx,pptx,doc,xls,ppt,rtf,pdf,odt,odp,ods,odg,odf,sxw,sxi,sxc,sxd,stw",
                    label: "Office documents"
                }, {
                    value: "zip,gz,tar,tar.gz,rar,7z",
                    label: "Archive files"
                }, {
                    value: "mp3,mp4,mov,m4v,m4a,3gp,flv,mpg,mpeg,wav,avi,wmv",
                    label: "Audio/Video files"
                }, {
                    value: "pdf,ai,psd,ai,eps,svg,fxg",
                    label: "Adobe files"
                }];
                $(document).trigger("setupAutoComplete")
            }, 350), __p += "\r\n"
        }
        return __p
    }, this.Formbuilder.templates["edit/input-group-addon"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape, Array.prototype.join
        }
        with(obj) {
            var model = "model.field_options.addon";
            __p += '\r\n<section class="inputGroupAddon">\r\n<h4>Icon / Text<span class=\'symbol\'><span class=\'fa fa-caret-right\'></span></span></h4>\r\n<div class="content">\r\n	<label>\r\n		Left icon name\r\n		<div class="input-group">\r\n			<input type="text" data-rv-input="' + (null == (__t = model) ? "" : __t) + '.leftIcon" placeholder="glyphicon glyphicon-envelope" style="width: 200px;margin-right: 4px;">\r\n			<a href="#" class="btn btn-default" data-toggle="modal" data-iconname="field_options.addon.leftIcon" data-target="#iconsModal">Browse</a>\r\n		</div>\r\n	</label>\r\n	<label>\r\n		Left text\r\n		<input type="text" data-rv-input="' + (null == (__t = model) ? "" : __t) + '.leftText">\r\n	</label>\r\n	<label>\r\n		Right icon name\r\n		<div class="input-group">\r\n			<input type="text" data-rv-input="' + (null == (__t = model) ? "" : __t) + '.rightIcon" placeholder="glyphicon glyphicon-envelope" style="width: 200px;margin-right: 4px;">\r\n			<a href="#" class="btn btn-default" data-toggle="modal"  data-iconname="field_options.addon.rightIcon" data-target="#iconsModal">Browse</a>\r\n		</div>\r\n	</label>\r\n	<label>\r\n		Right text\r\n		<input type="text" data-rv-input="' + (null == (__t = model) ? "" : __t) + '.rightText">\r\n	</label>\r\n</div>	\r\n</section>\r\n'
        }
        return __p
    }, this.Formbuilder.templates["edit/integer_only"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape
        }
        with(obj) __p += "<div class='fb-edit-section-header'>Integer only</div>\r\n<label>\r\n  <input type='checkbox' data-rv-checked='model." + (null == (__t = Formbuilder.options.mappings.INTEGER_ONLY) ? "" : __t) + "' />\r\n  Only accept integers\r\n</label>\r\n";
        return __p
    }, this.Formbuilder.templates["edit/label_description"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape
        }
        with(obj) __p += "<input type='text' data-rv-input='model." + (null == (__t = Formbuilder.options.mappings.LABEL) ? "" : __t) + "' />\r\n\r\n<label style=\"display: inline-block;width: 100px;\">\r\n<input type='checkbox' data-rv-checked='model." + (null == (__t = Formbuilder.options.mappings.LABEL) ? "" : __t) + 'Hide\' style="width:28px;" title="screen reader will still read the label" />Hide label\r\n</label>\r\n\r\n<label style="display: inline-block;width: 150px;">\r\n  <input type=\'checkbox\' data-rv-checked=\'model.' + (null == (__t = Formbuilder.options.mappings.HIDDEN) ? "" : __t) + '\' style="width:28px;" title="Hide the entire field"/>\r\n  Hide whole field\r\n</label>\r\n\r\n<div>\r\n<a href="#" class="moreOptions">More options <span class=\'symbol\'><span class=\'fa fa-caret-right\'></span></a>\r\n<div class="moreOptions">\r\n\r\n<label>\r\n	Main description\r\n	<textarea data-rv-input=\'model.field_options.mainDescription\'  placeholder="Description after field label"></textarea>\r\n</label>\r\n\r\n<label>\r\n	Image Urls (One line for one image)\r\n	<textarea data-rv-input=\'model.field_options.images.urls\' wrap="off"  placeholder="http://yourwebsite.com/demo.jpg"></textarea>\r\n	<label style="display: inline-block;">\r\n	  <input type=\'checkbox\' data-rv-checked=\'model.field_options.images.responsive\' style="width:28px;" />\r\n	  Responsive - auto fit screen width\r\n	</label>\r\n	<label style="display: inline-block;">\r\n	  <input type=\'checkbox\' data-rv-checked=\'model.field_options.images.slideshow\' style="width:28px;" />\r\n	  Make it a slide show\r\n	</label>\r\n\r\n</label>\r\n\r\n<label>\r\n	Youtube or Vimeo video embed code\r\n	<textarea data-rv-input=\'model.field_options.videoEmbed\'  placeholder="&lt;iframe width=&quot;560&quot; height=&quot;315&quot; src=&quot;https://www.youtube.com/embed/H-30B0cqh88&quot; frameborder=&quot;0&quot; allowfullscreen&gt;&lt;/iframe&gt;"></textarea>\r\n</label>\r\n\r\n</div>\r\n</div>\r\n\r\n<textarea data-rv-input=\'model.' + (null == (__t = Formbuilder.options.mappings.DESCRIPTION) ? "" : __t) + "'\r\n  placeholder='Add a longer description to this field'></textarea>";
        return __p
    }, this.Formbuilder.templates["edit/lang"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape, Array.prototype.join
        }
        with(obj) {
            var languages = {
                    ar: "Arabic",
                    id: "Bahasa",
                    eu: "Basque",
                    bg: "Bulgarian",
                    ca: "Catalan",
                    "zh-CN": "Chinese (Simplified)",
                    "zh-TW": "Chinese (Traditional)",
                    hr: "Croatian localisation",
                    cs: "Czech",
                    da: "Danish",
                    nl: "Dutch",
                    et: "Estonian",
                    fi: "Finnish",
                    fr: "French",
                    de: "German",
                    ka: "Georgian",
                    el: "Greek",
                    he: "Hebrew",
                    hu: "Hungarian",
                    is: "Icelandic",
                    it: "Italian",
                    ja: "Japanese",
                    kk: "Kazakh",
                    kr: "Korean",
                    lv: "Latvian",
                    lt: "Lithuanian",
                    ms: "Malay",
                    no: "Norwegian",
                    fa: "Persian",
                    pl: "Polish",
                    pt: "Portuguese",
                    "pt-BR": "Portuguese (Brazil)",
                    ro: "Romanian",
                    ru: "Russian",
                    sr: "Serbian cyrillic",
                    "sr-latin": "Serbian latin",
                    sk: "Slovak",
                    sl: "Slovene",
                    sv: "Swedish",
                    es: "Spanish",
                    th: "Thai",
                    tr: "Turkish",
                    uk: "Ukrainian",
                    vi: "Vietnamese"
                },
                isRecaptcha = "model.recaptcha.language" == attr;
            isRecaptcha || (__p += "\r\n<section id='langConfig'>\r\n<h4>Language</h4>\r\n<div class=\"content\">\r\n"), __p += '\r\n<!--\r\n  <label>Submit button:<input type="text" data-rv-input="model.lang.btnSubmit" placeholder="Submit"></label>\r\n\r\n  <label>\r\n  Check required fields\r\n  <input type="text" data-rv-input="model.lang.checkRequiredFields" placeholder="Please check the required fields">\r\n  </label>\r\n -->\r\n  <label>\r\n    Language\r\n    <select data-rv-value=\'' + (null == (__t = attr) ? "" : __t) + '\'>\r\n      <option value="">English</option>\r\n      ', _.each(languages, function(a, b) {
                __p += '\r\n      <option value="' + (null == (__t = b) ? "" : __t) + '">' + (null == (__t = a) ? "" : __t) + "</option>\r\n     "
            }), __p += "\r\n    </select>\r\n    Set language for validation messages, date picker plugin, etc..\r\n  </label>\r\n", isRecaptcha || (__p += "\r\n</div>\r\n</section>\r\n"), __p += "\r\n"
        }
        return __p
    }, this.Formbuilder.templates["edit/logic_item"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape, Array.prototype.join
        }
        with(obj) __p += '<div class="logicItem" data-logicItem-cid="' + (null == (__t = cid) ? "" : __t) + "\">\r\n\r\n  <label><input type='checkbox' data-rv-checked='logic.disabled'>Disable</label>\r\n  | \r\n  <a href=\"#\" class='removeLogic'>Remove</a>\r\n\r\n<fieldset data-rv-disabled='logic.disabled' data-rv-class-disabled='logic.disabled' data-rv-hide='logic.disabled'>\r\n\r\n\r\n\r\n<table>\r\n  <tr>\r\n    <td>I want to</td>\r\n\r\n    <td>\r\n      <select data-rv-value=\"logic.action\">\r\n", _.each(Formbuilder.LogicActions, function(a) {
            __p += '      \r\n        <option value="' + (null == (__t = a) ? "" : __t) + '">' + (null == (__t = a) ? "" : __t) + "</option>\r\n"
        }), __p += '\r\n      </select>\r\n    </td>\r\n\r\n    <td>field(s)</td>\r\n\r\n    <td>\r\n      <input class="logic-selector" id="logic-selector-' + (null == (__t = cid) ? "" : __t) + '" data-rv-value="logic.selector" readonly>\r\n    </td>\r\n  </tr>\r\n</table>\r\n\r\n<div class="cidToLabel logic" id="label-logic-selector-' + (null == (__t = cid) ? "" : __t) + '" >\r\n' + (null == (__t = cidToLabel()) ? "" : __t) + '\r\n</div>\r\n\r\n\r\n\r\n<table>\r\n  <tr>\r\n    <td>if</td>\r\n\r\n    <td>\r\n      <select data-rv-value="logic.match">\r\n', _.each(["all", "any", "none"], function(a) {
            __p += '      \r\n        <option value="' + (null == (__t = a) ? "" : __t) + '">' + (null == (__t = a) ? "" : __t) + "</option>\r\n"
        }), __p += '\r\n      </select>\r\n    </td>\r\n\r\n    <td>of the following rules match:</td>\r\n  </tr>\r\n</table>\r\n\r\n<div class="rules">\r\n  <ol id="logic-rules-' + (null == (__t = cid) ? "" : __t) + '"></ol>\r\n  <button class="btnAddRule">+ Add Rule</button>\r\n</div>\r\n\r\n</fieldset>\r\n</div>\r\n';
        return __p
    }, this.Formbuilder.templates["edit/logic_item_option"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape
        }
        with(obj) __p += '<div data-logic-set-cid="' + (null == (__t = cid) ? "" : __t) + '">\r\n	<label class="checkbox"><input type="checkbox" value="' + (null == (__t = cid) ? "" : __t) + '">' + (null == (__t = cid) ? "" : __t) + ": " + (null == (__t = label) ? "" : __t) + '</label>\r\n	<label class="radio"><input type="radio" name="logicRuleSelector" value="' + (null == (__t = cid) ? "" : __t) + '">' + (null == (__t = cid) ? "" : __t) + ": " + (null == (__t = label) ? "" : __t) + "</label>\r\n\r\n</div>        ";
        return __p
    }, this.Formbuilder.templates["edit/logic_rule_item"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape
        }
        with(obj) __p += '<div class="logicRuleItem" data-logicRuleItem-cid="' + (null == (__t = cid) ? "" : __t) + "\">\r\n\r\n<label>\r\n  <input type='checkbox' data-rv-checked='item.disabled'>Disable\r\n</label>\r\n|\r\n<a href=\"#\" class='removeLogicRule'>Remove</a>\r\n\r\n<fieldset data-rv-disabled='item.disabled' data-rv-class-disabled='item.disabled' data-rv-hide='item.disabled'>\r\n\r\n<table>\r\n  <tr>\r\n    <td>\r\n      if field\r\n    </td>\r\n    <td valign=\"top\">\r\n      <input class=\"itemAttr logic-rule-selector\" id=\"logic-rule-selector-" + (null == (__t = cid) ? "" : __t) + '" data-cid="' + (null == (__t = cid) ? "" : __t) + '" data-rv-value="item.selector">\r\n    </td>\r\n\r\n    <td valign="top">\r\n      <select class="itemAttr" data-rv-value="item.condition">\r\n        <option value="==">is equal to</option>\r\n        <option value="!=">is not equal to</option>\r\n        <option value="begins with">begins with</option>\r\n        <option value="ends with">ends with</option>\r\n        <option value="contains">contains</option>\r\n        <option value="not contains">does not contain</option>\r\n<!--\r\n        <option>is focused</option>\r\n        <option>is changed value</option>\r\n        <option>is greater than</option>\r\n        <option>is lesser than</option>\r\n        <option>is hidden</option>\r\n        <option>is visible</option>\r\n        <option>validation failed</option>\r\n        <option>validation passed</option>\r\n -->\r\n      </select>\r\n    </td>\r\n\r\n\r\n    <td valign="top">\r\n      <input class="itemAttr" id="logic-rule-value-' + (null == (__t = cid) ? "" : __t) + '" data-cid="' + (null == (__t = cid) ? "" : __t) + '" data-rv-value="item.value">\r\n    </td>\r\n\r\n  </tr>\r\n\r\n</table>  \r\n\r\n<div class="cidToLabel rule" id="label-logic-rule-selector-' + (null == (__t = cid) ? "" : __t) + '" >\r\n' + (null == (__t = cidToLabel()) ? "" : __t) + "\r\n</div>\r\n\r\n</fieldset>\r\n</div>";
        return __p
    }, this.Formbuilder.templates["edit/logics"] = function(obj) {
        obj || (obj = {}); {
            var __p = "";
            _.escape, Array.prototype.join
        }
        with(obj) __p += '<section id=\'logicsConfig\'>\r\n<h4 class="wide" style="background-color: #DA4453;">Define Form Logic</h4>\r\n<div class="content">\r\n\r\n<div class="logics">\r\n  <ol id="logics"></ol>\r\n  <button id="btnAddLogic">+ Add Logic</button>\r\n</div>\r\n\r\n</div>\r\n</section>\r\n', setTimeout(function() {
            var a = function() {
                var a, b, c = $(this),
                    d = [],
                    e = c.val(),
                    f = "#logic-rule-value-" + c.data("cid"),
                    g = App.Builder.mainView.collection.where({
                        cid: e
                    }),
                    h = _.isArray(g) && 1 === g.length && g[0].attributes;
                if (h) {
                    if (a = g[0], b = a.get(Formbuilder.options.mappings.OPTIONS), b && b.length)
                        for (var i = 0, j = b.length; j > i; i++) {
                            var k = b[i];
                            d.push({
                                label: k.label,
                                value: k.value ? k.value : k.label
                            })
                        }
                    if (void 0 != $(f).data("ui-autocomplete")) return void $(f).autocomplete("option", "source", d);
                    var l = function() {
                            void 0 != $(this).data("ui-autocomplete") && $(this).autocomplete("search", "")
                        },
                        m = function(a, b) {
                            var d = {
                                cid: c.data("cid"),
                                value: b.item.value
                            };
                            $(document).trigger("logic.rule.setValue." + d.cid, [d])
                        };
                    $(f).autocomplete({
                        minLength: 0,
                        source: d
                    }).click(l).on("autocompleteselect", m)
                }
            };
            $("div.logics").on({
                click: a,
                change: a
            }, ".itemAttr.logic-rule-selector"), $.doIfExists("div.logics .itemAttr.logic-rule-selector", function() {
                $(this).trigger("change")
            }, 1e3)
        }, 250);
        return __p
    }, this.Formbuilder.templates["edit/mailer"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape, Array.prototype.join
        }
        with(obj) __p += '<section id=\'mailersConfig\'>\r\n<h4 style="background-color: #DA4453;">Choose Mailer</h4>\r\n<div class="content">\r\n\r\n  <ul>\r\n	  <li>\r\n	  	<label><input type="radio" name="mailer" data-rv-checked="model.mailer" value="local"> Default mailer on your website (if applicable)</label>\r\n	  </li>\r\n	  <li>\r\n		  <label><input type="radio" name="mailer" data-rv-checked="model.mailer" value="smtp"> SMTP</label><br>\r\n		  ' + (null == (__t = Formbuilder.templates["edit/smtp"]()) ? "" : __t) + '\r\n	  </li>\r\n	  <li>\r\n		  <label><input type="radio" name="mailer" data-rv-checked="model.mailer" value="mailgun"> MailGun (<a href="https://documentation.mailgun.com/quickstart.html" target="_blank">Quick Start</a>)</label><br>\r\n		  ' + (null == (__t = Formbuilder.templates["edit/mailgun"]()) ? "" : __t) + '\r\n	  </li>\r\n  </ul>\r\n  \r\n  <a href="#" class="moreOptions">More options <span class=\'symbol\'><span class=\'fa fa-caret-right\'></span></a>\r\n  <div class="moreOptions">\r\n  	<label>Force sending email as (optional)\r\n  		<input type="text" name="sendmail_from" data-rv-input="model.email.sendmail_from" placeholder="you@yourwebsite.com">\r\n	  	<div class="hints">\r\n	  		If you use free SMTP server, like Gmail, Yahoo, Outlook.com, it should be the same as your email address. For example, you@yahoo.com.\r\n	  	</div>\r\n  	</label>\r\n<!-- \r\n  	<label>\r\n  		<input type="checkbox" name="" data-rv-input="model.testSmtpHere">Test my SMTP config here\r\n  	</label>\r\n -->  	\r\n</div>\r\n\r\n</div>\r\n</section>\r\n', setTimeout(function() {
            var a = Formbuilder.formSettingModel.get("mailer");
            $("#mailersConfig input[name=mailer][value=" + a + "]").click()
        }, 250);
        return __p
    }, this.Formbuilder.templates["edit/mailgun"] = function(obj) {
        obj || (obj = {}); {
            var __p = "";
            _.escape
        }
        with(obj) __p += '<section class="mailer mailgun" id=\'mailGunConfig\'>\r\n  <label>Domain:<input type="text" data-rv-input="model.mailgun.domain"></label>\r\n  <label>API Key:<input type="text" data-rv-input="model.mailgun.apiKey"></label>\r\n  <label>Send From Email:<input type="text" data-rv-input="model.mailgun.fromEmail"></label>\r\n  <label>From Name:<input type="text" data-rv-input="model.mailgun.fromName"></label>\r\n<!--\r\n  <label>Reply To:<input type="text" data-rv-input="model.mailgun.replyTo"></label>\r\n  <label>Public Key:<input type="text" data-rv-input="model.mailgun.publicKey"></label>\r\n  <label>Catch all:<input type="text" data-rv-input="model.mailgun.catchAll"></label>\r\n  <label>Test mode:</label>\r\n  <label><input type="checkbox" data-rv-checked="model.mailgun.testMode" />On</label>\r\n -->\r\n</section>';
        return __p
    }, this.Formbuilder.templates["edit/mask"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape, Array.prototype.join
        }
        with(obj) {
            __p += "\r\n<section class=\"mask\">\r\n<h4>Mask<span class='symbol'><span class='fa fa-caret-right'></span></span></h4>\r\n<div class=\"content\">\r\n\r\n";
            var mask = "model." + Formbuilder.options.mappings.MASK;
            __p += "\r\n	<label>\r\n		<div class=\"\">\r\n		  Use mask to improve usability and reduce input errors. The characters <b>'0', '9', '#', 'A', and 'S'</b> are mask translators.\r\n		  <pre>'0': one number\r\n'9': one optional number\r\n'#': numbers,\r\n'A': letters and numbers,\r\n'S': letters only\r\n</pre>\r\n		</div>\r\n	Define mask\r\n	<input type='text' class=\"pattern\" data-rv-input='" + (null == (__t = mask) ? "" : __t) + ".pattern' placeholder=\"mask pattern\" />\r\n	</label>\r\n\r\n	<label class=\"hide\">\r\n		<input type='checkbox' data-rv-checked='" + (null == (__t = mask) ? "" : __t) + ".clearIfNotMatch' />\r\n		Clear if not match\r\n	</label>\r\n\r\n	<label class=\"hide\">\r\n		<input type='checkbox' data-rv-checked='" + (null == (__t = mask) ? "" : __t) + ".selectOnFocus' />\r\n		Select on focus\r\n	</label>\r\n\r\n	<label class=\"hide\">\r\n		<input type='checkbox' data-rv-checked='" + (null == (__t = mask) ? "" : __t) + ".reverse' />\r\n		Reverse\r\n	</label>\r\n\r\n</div>\r\n</section>\r\n\r\n", setTimeout(function() {
                var a = [{
                    value: "#",
                    label: "Numbers Only"
                }, {
                    value: "S",
                    label: "Letters Only"
                }, {
                    value: "A",
                    label: "Letters and Numbers"
                }, {
                    value: "00/00/0000",
                    label: "Date"
                }, {
                    value: "(000) 000-0000",
                    label: "Phone"
                }, {
                    value: "999999999.99",
                    label: "Money"
                }, {
                    value: "0000000000000000",
                    label: "Credit Card Number"
                }, {
                    value: "00000",
                    label: "US Zipcode"
                }, {
                    value: "S0S0S0",
                    label: "Canada Postal Code"
                }, {
                    value: "00:00:00",
                    label: "Time"
                }, {
                    value: "099.099.099.099",
                    label: "IP Address"
                }];
                $(document).trigger("setupAutoComplete", {
                    selector: "section.mask input.pattern",
                    attrId: "field_options.mask.pattern",
                    source: a
                })
            }, 350), __p += "\r\n"
        }
        return __p
    }, this.Formbuilder.templates["edit/media"] = function(obj) {
        obj || (obj = {}); {
            var __p = "";
            _.escape
        }
        with(obj) __p += "<section class=\"mask\">\r\n<h4>Image or Video<span class='symbol'><span class='fa fa-caret-right'></span></span></h4>\r\n<div class=\"content\">\r\n	Upload image or enter youtube video link\r\n</div>\r\n</section>";
        return __p
    }, this.Formbuilder.templates["edit/min_max"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape
        }
        with(obj) __p += '<!-- \r\n<div class=\'fb-edit-section-header\'>Minimum / Maximum</div>\r\n\r\nAbove\r\n<input type="text" data-rv-input="model.' + (null == (__t = Formbuilder.options.mappings.MIN) ? "" : __t) + '" style="width: 30px" />\r\n\r\n&nbsp;&nbsp;\r\n\r\nBelow\r\n<input type="text" data-rv-input="model.' + (null == (__t = Formbuilder.options.mappings.MAX) ? "" : __t) + '" style="width: 30px" />\r\n -->';
        return __p
    }, this.Formbuilder.templates["edit/min_max_length"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape
        }
        with(obj) __p += '<!-- \r\n<div class=\'fb-edit-section-header\'>Length Limit</div>\r\n\r\nMin\r\n<input type="text" data-rv-input="model.' + (null == (__t = Formbuilder.options.mappings.MINLENGTH) ? "" : __t) + '" style="width: 30px" />\r\n\r\n&nbsp;&nbsp;\r\n\r\nMax\r\n<input type="text" data-rv-input="model.' + (null == (__t = Formbuilder.options.mappings.MAXLENGTH) ? "" : __t) + '" style="width: 30px" />\r\n\r\n&nbsp;&nbsp;\r\n\r\n<select data-rv-value="model.' + (null == (__t = Formbuilder.options.mappings.LENGTH_UNITS) ? "" : __t) + '" style="width: auto;">\r\n  <option value="characters">characters</option>\r\n  <option value="words">words</option>\r\n</select>\r\n -->';
        return __p
    }, this.Formbuilder.templates["edit/number_spinner"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape, Array.prototype.join
        }
        with(obj) {
            var model = "model.field_options.numSpinner";
            __p += '\r\n\r\n<section class="numberSpinner">\r\n<h4>Spinner<span class=\'symbol\'><span class=\'fa fa-caret-right\'></span></h4>\r\n<div class="content">\r\n  \r\n  <label>\r\n    <input type="checkbox" class="spinnerEnabled" data-rv-checked="' + (null == (__t = model) ? "" : __t) + '.enabled" >\r\n    Use beautiful <a href="http://www.virtuosoft.eu/code/bootstrap-touchspin/" target="_blank" title="A mobile and touch friendly input spinner component for Bootstrap 3. It supports the mousewheel and the up/down keys.">TouchSpin</a> buttons\r\n  </label>\r\n\r\n  <div data-rv-show="' + (null == (__t = model) ? "" : __t) + ".enabled\" style=\"padding: 10px;\">\r\n\r\n	<label>\r\n		Incremental / decremental step\r\n		<input type='text' data-rv-input='" + (null == (__t = model) ? "" : __t) + ".step' />\r\n	</label>\r\n\r\n	<label>\r\n		Default value\r\n		<input type='text' data-rv-input='" + (null == (__t = model) ? "" : __t) + ".initval' />\r\n	</label>\r\n\r\n  <a href=\"#\" class=\"moreOptions\">More options <span class='symbol'><span class='fa fa-caret-right'></span></a>\r\n  <div class=\"moreOptions\">\r\n	<label>\r\n		Minimum value\r\n		<input type='text' data-rv-input='" + (null == (__t = model) ? "" : __t) + ".min' />\r\n	</label>\r\n\r\n	<label>\r\n		Maximum value\r\n		<input type='text' data-rv-input='" + (null == (__t = model) ? "" : __t) + ".max' />\r\n	</label>\r\n\r\n	<label>\r\n		Decimals\r\n		<input type='text' data-rv-input='" + (null == (__t = model) ? "" : __t) + ".decimals' placeholder=\"0\" />\r\n	</label>\r\n\r\n	<label>\r\n		Text before the input\r\n		<input type='text' data-rv-input='" + (null == (__t = model) ? "" : __t) + ".prefix' />\r\n	</label>\r\n\r\n	<label>\r\n		Text after the input\r\n		<input type='text' data-rv-input='" + (null == (__t = model) ? "" : __t) + ".postfix' />\r\n	</label>\r\n\r\n	<label>\r\n		Round method\r\n		<select data-rv-value='" + (null == (__t = model) ? "" : __t) + '.forcestepdivisibility\'>\r\n			<option value="round">Round</option>\r\n			<option value="floor">Floor</option>\r\n			<option value="ceil">Ceil</option>\r\n			<option value="none">None</option>\r\n		</select>\r\n	</label>\r\n   </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n</section>\r\n'
        }
        return __p
    }, this.Formbuilder.templates["edit/options"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape, Array.prototype.join
        }
        with(obj) {
            __p += "<section class=\"options\">\r\n<h4>Options<span class='symbol'><span class='fa fa-caret-right'></span></span></h4>\r\n<div class=\"content expand\">\r\n  " + (null == (__t = Formbuilder.templates["edit/select_preset_json"]()) ? "" : __t) + '\r\n<button class="editOptions">Edit Options</button>\r\n\r\n', "dropdown" == Formbuilder.rf.get(Formbuilder.options.mappings.FIELD_TYPE) && (__p += "\r\n  <p>\r\n  <label>\r\n    <input type='checkbox' class=\"allowMultiple\" data-rv-checked='model." + (null == (__t = Formbuilder.options.mappings.MULTIPLE) ? "" : __t) + "' />\r\n    Allow multiple\r\n  </label>\r\n  </p>\r\n"), __p += '\r\n\r\n<div class="dependField hide">\r\n  <label>\r\n    <input type=\'checkbox\' data-rv-checked=\'model.field_options.dependOn.enabled\' />\r\n    Is a dependent field?\r\n  </label>\r\n\r\n  <div data-rv-show=\'model.field_options.dependOn.enabled\' style="margin-left: 18px;">\r\n    <label>\r\n      Load options dependens on the value of a parent field:\r\n      <select class="dependsCid" data-rv-value="model.field_options.dependOn.cid">\r\n      <option value=""> - Select Parent Field -</option>\r\n        ', App.Builder.mainView.collection.sort();
            var type, showChildField = !1,
                fildTypes = ",dropdown,";
            _.each(App.Builder.mainView.collection.models, function(a) {
                type = "," + a.get(Formbuilder.options.mappings.FIELD_TYPE) + ",", -1 !== fildTypes.indexOf(type) && a.cid != Formbuilder.rf.cid && (showChildField = !0, __p += '\r\n          <option value="' + (null == (__t = a.get("cid")) ? "" : __t) + '">' + (null == (__t = a.get("cid") + ": " + a.get("label")) ? "" : __t) + "</option>\r\n        ")
            }), __p += '\r\n      </select>\r\n    </label>\r\n    <div class="childOption">\r\n      <label>\r\n        <input type="checkbox" data-rv-checked="model.field_options.dependOn.remote" /> Load options remotely\r\n      </label>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n</div>\r\n</section>\r\n', setTimeout(function() {
                $(document).trigger("handsontable:render_options", Formbuilder.rf), $c = $("div.dependField"), $co = $(".dependField .childOPtion"), showChildField && $c.removeClass("hide"), $(".dependsCid").change(function() {
                    var a = $(this).val();
                    "" != a ? $co.show() : $co.hide()
                }), $("input.allowMultiple").change(function() {
                    var a, b, c = $(this).is(":checked"),
                        d = ["minlength", "maxlength"];
                    for (a = 0, b = d.length; b > a; a++) {
                        var e = d[a],
                            f = Formbuilder.options.mappings.VALIDATORS + "." + e + ".enabled",
                            g = "#validator-enabled-" + e;
                        c ? $(".validator." + e).show() : ($(g).prop("checked", !1), Formbuilder.rf.set(f, !1), $(".validator." + e).hide())
                    }
                }), $("input.allowMultiple").trigger("change")
            }, 350), __p += "\r\n"
        }
        return __p
    }, this.Formbuilder.templates["edit/placeholder"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape, Array.prototype.join
        }
        with(obj) {
            if ("undefined " == typeof defaultText) var defaultText = "";
            __p += "\r\n<section class=\"placeholder\">\r\n<label>\r\n	Placeholder\r\n	<input type='text' data-rv-input='model." + (null == (__t = Formbuilder.options.mappings.PLACEHOLDER) ? "" : __t) + "' placeholder=\"" + (null == (__t = defaultText) ? "" : __t) + '" />\r\n</label>\r\n</section>'
        }
        return __p
    }, this.Formbuilder.templates["edit/recaptcha"] = function(obj) {
        function toggleImg() {
            var a = $("#recaptcha-invalid-key"),
                b = !a.is(":visible");
            b ? a.show() : a.hide()
        }
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape, Array.prototype.join
        }
        with(obj) __p += '<section class=\'reCaptchaConfig\'>\r\n\r\n  <p>\r\n  To use Google\'s <a href="https://www.google.com/recaptcha/intro/index.html" target="_blank">reCaptcha</a> to fight spam robots.\r\n  You <a href="https://www.google.com/recaptcha/admin" target="_blank">need your own keys</a> from Google, otherwise error "<span style=\'color:red;\'>ERROR: Invalid site key</span>" will be shown on your website. <a href="#" id="see-recaptcha-invalid-key">See example here</a>.\r\n  <img id="recaptcha-invalid-key" src="/css/images/recaptcha-error-invalid-site-key.png" style="display: none;">\r\n  </p>\r\n\r\n  <label>Site key: <a href="https://www.google.com/recaptcha/admin" target="_blank">Get keys</a><input type="text" data-rv-input="model.recaptcha.siteKey"></label>\r\n  <label>Secret key:<input type="text" data-rv-input="model.recaptcha.secretKey"></label>\r\n  <label>Theme:\r\n	<select data-rv-value="model.recaptcha.theme">\r\n		<option value="light">Light</option>\r\n		<option value="dark" >Dark</option>\r\n	</select>\r\n  </label>\r\n\r\n  ' + (null == (__t = Formbuilder.templates["edit/lang"]({
            attr: "model.recaptcha.language"
        })) ? "" : __t) + "\r\n\r\n  </div>\r\n\r\n</section>\r\n", setTimeout(function() {
            $("#see-recaptcha-invalid-key").click(toggleImg)
        }, 250), __p += "\r\n";
        return __p
    }, this.Formbuilder.templates["edit/select_preset_json"] = function(obj) {
        obj || (obj = {}); {
            var __p = "";
            _.escape, Array.prototype.join
        }
        with(obj) __p += '<label>\r\n	Use a preset list\r\n	<select class="selectPresetJson" data-rv-value="model.field_options.presetJson">\r\n		<option value=""></option>\r\n		<optgroup label="Standard">\r\n		<option value="countries.json">Country</option>\r\n		<option value="us_states.json">U.S. States</option>\r\n		<option value="ca_provinces.json">Canada Provinces/Territories </option>\r\n		<option value="us_states_ca_provinces.json">U.S. States & Canada Provinces</option>\r\n		<option value="months.json">Months</option>\r\n		<option value="days.json">Days</option>\r\n		<option value="world_provinces.json">State & Province of Countries</option>\r\n		</optgroup>\r\n\r\n		<optgroup label="For Dependent Dropdown">\r\n		<option value="depend_us_states_ca_provinces.json">U.S. States & Canada Provinces</option>\r\n		</optgroup>\r\n\r\n	</select>\r\n</label>\r\n', setTimeout(function() {
            Formbuilder.rf.set("field_options.presetJson", $("select.selectPresetJson").val()), $("select.selectPresetJson").off("change").change(function(a) {
                function b() {
                    bootbox.confirm({
                        message: "<h3>The field's options will be replaced with preset data!</h3><h3>Are you sure?</h3>",
                        callback: function(a) {
                            a ? (Formbuilder.rf.set("field_options.options", d), Formbuilder.rf.set("field_options.presetJson", c.val()), $(document).trigger("handsontable:render_options", Formbuilder.rf)) : Formbuilder.rf.set("field_options.presetJson", e)
                        }
                    })
                }
                var c = $(a.target),
                    d = null,
                    e = Formbuilder.rf.get("field_options.presetJson");
                if ("" == c.val()) d = null, b();
                else {
                    $.getJSON("js/" + c.val(), function(a) {
                        d = a, b()
                    })
                }
            })
        }, 350);
        return __p
    }, this.Formbuilder.templates["edit/sender"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape
        }
        with(obj) __p += '<section class="sender">\r\n<br style="margin-top: 8px;">\r\n<label>\r\n	Is form sender\'s\r\n	<select class="sender" data-rv-value=\'model.' + (null == (__t = Formbuilder.options.mappings.SENDER) ? "" : __t) + "' >\r\n		<option value=''></option>\r\n		<option value='fullname'>Full Name</option>\r\n		<option value='firstname'>First Name</option>\r\n		<option value='lastname'>Last Name</option>\r\n	</select>\r\n</label>\r\n</section>\r\n";
        return __p
    }, this.Formbuilder.templates["edit/seo"] = function(obj) {
        obj || (obj = {}); {
            var __p = "";
            _.escape
        }
        with(obj) __p += '<section id=\'seoConfig\'>\r\n<h4>SEO & Google Analytics</h4>\r\n<div class="content">\r\n\r\n  <label>Title:<input type="text" data-rv-input="model.seo.title"></label>\r\n  <label>Description:<input type="text" data-rv-input="model.seo.description"></label>\r\n  <label>Keywords:<input type="text" data-rv-input="model.seo.keywords"></label>\r\n  <label>Author:<input type="text" data-rv-input="model.seo.author"></label>\r\n  <label>Google tracking ID: (<a href="https://support.google.com/analytics/answer/1032385?hl=en" target="_blank">Get ID</a>)<input type="text" data-rv-input="model.seo.trackerId"></label>\r\n\r\n</div>\r\n</section>\r\n';

        return __p
    }, this.Formbuilder.templates["edit/signature"] = function(obj) {
        obj || (obj = {}); {
            var __p = "";
            _.escape
        }
        with(obj) __p += "\r\n<label>\r\n	Clear button text\r\n	<input type='text' data-rv-input='model.signature.labelClear' />\r\n</label>\r\n<label>\r\n	Width of sign area\r\n	<input type='text' data-rv-input='model.signature.width' />\r\n</label>\r\n<label>\r\n	Height of sign area\r\n	<input type='text' data-rv-input='model.signature.height' />\r\n</label>";
        return __p
    }, this.Formbuilder.templates["edit/size"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape
        }
        with(obj) __p += "<!-- \r\n<div class='fb-edit-section-header'>Size</div>\r\n<select data-rv-value=\"model." + (null == (__t = Formbuilder.options.mappings.SIZE) ? "" : __t) + '">\r\n  <option value="small">Small</option>\r\n  <option value="medium">Medium</option>\r\n  <option value="large">Large</option>\r\n</select>\r\n -->';
        return __p
    }, this.Formbuilder.templates["edit/smtp"] = function(obj) {
        obj || (obj = {}); {
            var __p = "";
            _.escape, Array.prototype.join
        }
        with(obj) __p += '<section class="mailer smtp" id=\'smtpConfig\'>\r\n  <h5>Select your mailer</h5>\r\n  <div class=\'providers\'>\r\n    <a href="#" class="GMail">GMail</a>\r\n    <a href="#" class="Yahoo">Yahoo</a>\r\n    <a href="#" class="Outlook">Outlook</a>\r\n    <a href="#" class="AOL">AOL</a>\r\n    <a href="#" class="GMX">GMX</a>\r\n    <a href="#" class="Mail.com">Mail.com</a>\r\n    <a href="#" class="iCloud">iCloud</a>\r\n    <a href="#" class="Yandex">Yandex</a>\r\n    <a href="#" class="ZOHO">ZOHO</a>\r\n    <a href="#" class="None">None of Above</a>\r\n  </div>\r\n  <span style=\'color:red;\'>We <b>don\'t</b> keep your Username/password.</span>\r\n  <label>Username:<input class="user" type="text" data-rv-input="model.smtp.user"></label>\r\n  <label>Password:<input type="text" data-rv-input="model.smtp.password"></label>\r\n  <label>Host:<input class="host" type="text" data-rv-input="model.smtp.host"></label>\r\n  <label>Port:<input  class="port" type="text" data-rv-input="model.smtp.port"></label>\r\n  <div>Security:\r\n  	<label><input type="radio" name="smtpSecurity" value="none" data-rv-checked="model.smtp.security" />None</label>\r\n  	<label><input type="radio" name="smtpSecurity" value="ssl" data-rv-checked="model.smtp.security" />SSL</label>\r\n  	<label><input type="radio" name="smtpSecurity" value="tls" data-rv-checked="model.smtp.security" />TLS</label>\r\n  </div>\r\n  <label><input type="checkbox" data-rv-checked="model.smtp.debug"> Turn on debug message</label>\r\n\r\n</section>\r\n', setTimeout(function() {
            var a = {
                GMail: {
                    host: "smtp.gmail.com",
                    user: "@gmail.com",
                    password: "",
                    port: "465",
                    security: "ssl",
                    debug: !1
                },
                Yahoo: {
                    host: "smtp.mail.yahoo.com",
                    user: "@yahoo.com",
                    password: "",
                    port: "465",
                    security: "ssl",
                    debug: !1
                },
                iCloud: {
                    host: "smtp.mail.me.com",
                    user: "@icloud.com",
                    password: "",
                    port: "587",
                    security: "tls",
                    debug: !1
                },
                Outlook: {
                    host: "smtp-mail.outlook.com",
                    user: "@outlook.com",
                    password: "",
                    port: "587",
                    security: "tls",
                    debug: !1
                },
                AOL: {
                    host: "smtp.aol.com",
                    user: "@aol.com",
                    password: "",
                    port: "587",
                    security: "tls",
                    debug: !1
                },
                GMX: {
                    host: "mail.gmx.com",
                    user: "@gmx.com",
                    password: "",
                    port: "587",
                    security: "tls",
                    debug: !1
                },
                "Mail.com": {
                    host: "smtp.mail.com",
                    user: "@mail.com",
                    password: "",
                    port: "587",
                    security: "tls",
                    debug: !1
                },
                Yandex: {
                    host: "smtp.yandex.com",
                    user: "@yandex.com",
                    password: "",
                    port: "465",
                    security: "ssl",
                    debug: !1
                },
                None: {
                    host: "",
                    user: "",
                    password: "",
                    port: "",
                    security: "none",
                    debug: !1
                },
                ZOHO: {
                    host: "smtp.zoho.com",
                    user: "",
                    password: "",
                    port: "587",
                    security: "tls",
                    debug: !1
                }
            };
            $("#smtpConfig .providers a").click(function(b) {
                b.preventDefault();
                var c = $(b.target),
                    d = c.prop("class"),
                    e = a[d];
                if (!e) return !1;
                var f = Formbuilder.formSettingModel;
                return f.set("smtp.host", e.host), f.set("smtp.user", e.user), f.set("smtp.port", e.port), f.set("smtp.security", e.security), !1
            }), $("#smtpConfig input.user").change(function() {
                var a = Formbuilder.formSettingModel;
                a.set("email.sendmail_from", $(this).val())
            })
        }, 350), __p += "\r\n";
        return __p
    }, this.Formbuilder.templates["edit/submit"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape, Array.prototype.join
        }
        with(obj) {
            Formbuilder.rf = rf;
            var submit = "model.submit";
            __p += "\r\n<section class=\"submit\">\r\n	<label>\r\n		Button label\r\n		<input type='text' data-rv-input='" + (null == (__t = submit) ? "" : __t) + ".label' placeholder=\"Submit\" />\r\n	</label>\r\n	<label>\r\n		Form validation error\r\n		<input type='text' data-rv-input='" + (null == (__t = submit) ? "" : __t) + ".checkRequiredFields' placeholder=\"Please check the required fields.\" />\r\n	</label>\r\n	<label>\r\n		Button icon\r\n		<div class=\"input-group\">\r\n			<input type='text' data-rv-input='" + (null == (__t = submit) ? "" : __t) + '.icon\' placeholder="glyphicon glyphicon-ok-circle" style="width: 230px;margin-right: 4px;"/>\r\n			<a href="#" class="btn btn-default" data-toggle="modal" data-iconname="submit.icon" data-target="#iconsModal">Browse</a>\r\n		</div>\r\n	</label>\r\n</section>'
        }
        return __p
    }, this.Formbuilder.templates["edit/text"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape, Array.prototype.join
        }
        with(obj) {
            __p += '<section class="textField">\r\n' + (null == (__t = Formbuilder.templates["edit/mask"]()) ? "" : __t) + "\r\n" + (null == (__t = Formbuilder.templates["edit/input-group-addon"]()) ? "" : __t) + '\r\n<label style="display:none;">\r\n	Html5 input type:\r\n	<select data-rv-value="model.' + (null == (__t = Formbuilder.options.mappings.TYPE) ? "" : __t) + '" >\r\n	';
            var types = ["search", "email", "url", "tel", "number", "range", "date", "month", "week", "time", "datetime", "datetime-local", "color"];
            _.each(types, function(a) {
                __p += '\r\n		<option value="' + (null == (__t = a) ? "" : __t) + '">' + (null == (__t = a) ? "" : __t) + "</option>\r\n	"
            }), __p += "\r\n	</select>\r\n</label>\r\n</section>"
        }
        return __p
    }, this.Formbuilder.templates["edit/thankyou"] = function(obj) {
        obj || (obj = {}); {
            var __p = "";
            _.escape
        }
        with(obj) __p += '<section id=\'thanksConfig\'>\r\n<h4>Thank You Message</h4>\r\n<div class="content">\r\n\r\n  <label>Redirect to a page after form submitted:<input type="text" data-rv-input="model.thankyou.url" placeholder="http://yoursite.com/thankyou.html"></label>\r\n  <label>Or just display message:<textarea data-rv-input="model.thankyou.message | defaultText thankyou"  data-toggle=\'popover\' data-content-type=\'variable\'></textarea></label>\r\n  <label>Or display message for seconds, then redirect to page<input type="text" data-rv-input="model.thankyou.seconds" placeholder="Enter number of seconds"></label>\r\n\r\n</div>\r\n</section>\r\n';
        return __p
    }, this.Formbuilder.templates["edit/units"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape
        }
        with(obj) __p += '<div class=\'fb-edit-section-header\'>Units</div>\r\n<input type="text" data-rv-input="model.' + (null == (__t = Formbuilder.options.mappings.UNITS) ? "" : __t) + '" />\r\n';
        return __p
    }, this.Formbuilder.templates["edit/validators"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape, Array.prototype.join
        }
        with(obj) {
            var field_type = Formbuilder.rf.get(Formbuilder.options.mappings.FIELD_TYPE),
                enabled = {
                    text: {
                        min: !0,
                        max: !0,
                        minlength: !0,
                        maxlength: !0,
                        alphanumeric: !0,
                        equalto: !0,
                        pattern: !0
                    },
                    checkboxes: {
                        minlength: !0,
                        maxlength: !0
                    },
                    paragraph: {
                        minlength: !0,
                        maxlength: !0
                    },
                    name: {
                        minlength: !0,
                        maxlength: !0,
                        equalto: !0
                    },
                    dropdown: {
                        min: !0,
                        max: !0,
                        minlength: !0,
                        maxlength: !0
                    },
                    radio: {
                        min: !0,
                        max: !0
                    },
                    email: {
                        minlength: !0,
                        maxlength: !0,
                        equalto: !0
                    },
                    number: {
                        min: !0,
                        max: !0
                    }
                };
            if (!enabled[field_type]) return;
            __p += "\r\n<section class=\"validators\">\r\n<h4>Validators<span class='symbol'><span class='fa fa-caret-right'></span></span></h4>\r\n<div class=\"content expand\">\r\n\r\n  ", _.each(Formbuilder.validators, function(a) {
                var b = "model." + Formbuilder.options.mappings.VALIDATORS + "." + a.id;
                (!enabled[field_type] || enabled[field_type][a.id]) && _.isFunction(Formbuilder.templates["validators/" + a.id]) && (__p += '\r\n  <div class="validator ' + (null == (__t = a.id) ? "" : __t) + "\">\r\n    <label>\r\n      <input type='checkbox' data-rv-checked='" + (null == (__t = b) ? "" : __t) + ".enabled' id=\"validator-enabled-" + (null == (__t = a.id) ? "" : __t) + '" />\r\n      ' + (null == (__t = a.id) ? "" : __t) + '\r\n    </label>\r\n    <a href="#" onclick="$(\'#validator-option-' + (null == (__t = a.id) ? "" : __t) + '\').toggle();return false;"><i class="fa fa-caret-right"></i></a>\r\n\r\n    <div class="validator-option" id="validator-option-' + (null == (__t = a.id) ? "" : __t) + '" data-rv-show="' + (null == (__t = b) ? "" : __t) + '.enabled">\r\n      ' + (null == (__t = Formbuilder.templates["validators/" + a.id]()) ? "" : __t) + "\r\n          <input type='text' data-rv-value='" + (null == (__t = b) ? "" : __t) + ".msg | validatorMsg " + (null == (__t = a.id) ? "" : __t) + " " + (null == (__t = field_type) ? "" : __t) + "' placeholder=\"" + (null == (__t = a.msg) ? "" : __t) + '" />\r\n    </div>\r\n\r\n  </div>\r\n  ')
            }), __p += "\r\n\r\n</div>\r\n</section>\r\n"
        }
        return __p
    }, this.Formbuilder.templates.page = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape, Array.prototype.join
        }
        with(obj) __p += '<section class="builder">\r\n' + (null == (__t = Formbuilder.templates["partials/left_side"]()) ? "" : __t) + "\r\n" + (null == (__t = Formbuilder.templates["partials/right_side"]()) ? "" : __t) + '\r\n<div class=\'fb-clear\'></div>\r\n\r\n<div id="selectFieldsDialog" title="Select Field(s)" style="display:none;">\r\n  <ul id="selectFieldsContainer"></ul>\r\n</div>\r\n</section>\r\n\r\n', setTimeout(function() {
            var a = function() {
                var a = function() {
                    App.Builder.mainView.collection.sort();
                    var a, b = [],
                        c = ",recaptcha,";
                    _.each(App.Builder.mainView.collection.models, function(d) {
                        a = "," + d.get(Formbuilder.options.mappings.FIELD_TYPE) + ",", -1 === c.indexOf(a) && b.push('<div><b class="variable">{' + d.get("cid") + "}</b> : " + d.get("label") + "</div>")
                    });
                    var d = '<div class="sysVar"><div><b class="variable">{dataTable}</b> : A table shows all form fields\'s data</div>';
                    return d += '<div><b class="variable">{AutoID}</b> : Reference ID of the form submission, like an Order ID.</div>', d += '<div><b class="variable">{Date}</b> : Date</div>', d += '<div><b class="variable">{Time}</b> : Time</div>', d += '<div><b class="variable">{HTTP_HOST}</b> : Your website name</div>', d += '<div><b class="variable">{HTTP_REFERER}</b> : The address of the page (if any) which referred the user agent to your form</div>', d += "</div>", b.join("\n") + d
                };
                $(document).on({
                    click: function(b) {
                        var c = $(b.target);
                        if ("popover" == c.data("toggle")) {
                            if (1 == c.data("constrcuted")) return void c.popover("show");
                            var d = {
                                container: "body",
                                trigger: "focus",
                                html: !0
                            };
                            switch (c.data("content-type")) {
                                case "variable":
                                    d.title = "Use Variables for This Field", d.content = a
                            }
                            c.popover(d), c.popover("show"), c.data("constrcuted", !0)
                        }
                    }
                })
            };
            a()
        }, 350);
        return __p
    }, this.Formbuilder.templates["partials/add_field"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape, Array.prototype.join
        }
        with(obj) __p += "<div class='fb-tab-pane active' id='addField'>\r\n  <div class='fb-add-field-types'>\r\n    <div class='section'>\r\n      ", _.each(_.sortBy(Formbuilder.inputFields, "order"), function(a) {
            __p += '\r\n        <a data-field-type="' + (null == (__t = a.field_type) ? "" : __t) + '" class="' + (null == (__t = Formbuilder.options.BUTTON_CLASS) ? "" : __t) + '">\r\n          ' + (null == (__t = a.addButton) ? "" : __t) + "\r\n        </a>\r\n      "
        }), __p += "\r\n    </div>\r\n\r\n    <div class='section'>\r\n      ", _.each(_.sortBy(Formbuilder.nonInputFields, "order"), function(a) {
            __p += '\r\n        <a data-field-type="' + (null == (__t = a.field_type) ? "" : __t) + '" class="' + (null == (__t = Formbuilder.options.BUTTON_CLASS) ? "" : __t) + '">\r\n          ' + (null == (__t = a.addButton) ? "" : __t) + "\r\n        </a>\r\n      "
        }), __p += "\r\n    </div>\r\n  </div>\r\n</div>\r\n";
        return __p
    }, this.Formbuilder.templates["partials/edit_field"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape
        }
        with(obj) __p += "<div class='fb-tab-pane' id='editField'>\r\n  <div class='fb-edit-field-wrapper'></div>\r\n  " + (null == (__t = Formbuilder.templates["partials/edit_field_options"]()) ? "" : __t) + "\r\n</div>\r\n";
        return __p
    }, this.Formbuilder.templates["partials/edit_field_options"] = function(obj) {
        obj || (obj = {}); {
            var __p = "";
            _.escape
        }
        with(obj) __p += '  <div id="hotOptionEditor">\r\n  	<section class="hotHelp">\r\n  		<a href="#" class="showHelp">Show help and more config</a>\r\n		<ul class="hide">\r\n			<li>\r\n				<b>Value</b>:<br>\r\n				The value of the option. If the value is empty, then it will use the option text as the value. You can also use following special tags:\r\n				<p>\r\n				<b>#novalue or #empty</b>: explictly declare the option has no value. Use this tag to make the first option in dropdown/select field as prompt text.\r\n				</p>\r\n\r\n				<p>\r\n				<b>#optgroup</b>: only for dropdown/select fields. Declare the option is an optgroup label, all options are belonged to this group until a new #optgroup is declared.\r\n				</p>\r\n\r\n				<p>\r\n				<b>#input</b>: only for checkbox and radio fields. When the option is checked, it will show a single line input box and use its value when form submitted.\r\n				</p>\r\n\r\n				<p>\r\n				<b>#textarea</b>: only for checkbox and radio fields. When the option is checked, it will show a tetxarea box and use its value when form submitted.\r\n				</p>\r\n			</li>\r\n			<li>\r\n				<b>Image</b>:<br>\r\n				The image file name of the option.\r\n				<!--\r\n				<p>\r\n				<b>#value</b>: will be replaced with the value of the option.\r\n				</p>\r\n				-->\r\n				<b>Define base URL for image:</b><br>\r\n				<input type="text" name="imgBaseUrl" value="" placeholder="http://www.yourwebsite.com/images/" style="width:380px;" ><br>\r\n				Example: http://www.yourwebsite.com/images/\r\n\r\n			</li>\r\n			<li>\r\n				<b>Checked / Selected</b>:<br>\r\n				Set the selected/checked state for the option as default\r\n			</li>\r\n			<li>\r\n				<b>Text</b>:<br>\r\n				The display text for the option\r\n				<p>\r\n				<b>#depend</b>: Use this tag to indicate that all below options are depended on the <b>value</b> of its parent dropdown. See an example on how to set up options for a dropdown that depends on Country dropdown value: Country -> <a href="css/images/depend-tag.png" target="_blank"><u>States / Provinces</u></a>.\r\n\r\n				</p>\r\n			</li>\r\n\r\n		</ul>\r\n  	</section>\r\n\r\n  	<div id="hotTable" autofocus></div>\r\n  </div>\r\n';
        return __p
    }, this.Formbuilder.templates["partials/edit_form"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape
        }
        with(obj) __p += "<div class='fb-tab-pane' id='editForm'>\r\n\r\n	" + (null == (__t = Formbuilder.templates["edit/email"]()) ? "" : __t) + "\r\n	" + (null == (__t = Formbuilder.templates["edit/mailer"]()) ? "" : __t) + "\r\n	" + (null == (__t = Formbuilder.templates["edit/admin"]()) ? "" : __t) + "\r\n	" + (null == (__t = Formbuilder.templates["edit/thankyou"]()) ? "" : __t) + "\r\n	" + (null == (__t = Formbuilder.templates["edit/auto_response"]()) ? "" : __t) + "\r\n	" + (null == (__t = Formbuilder.templates["edit/logics"]()) ? "" : __t) + "\r\n	" + (null == (__t = Formbuilder.templates["edit/seo"]()) ? "" : __t) + "\r\n	" + (null == (__t = Formbuilder.templates["edit/lang"]({
            attr: "model.lang.language"
        })) ? "" : __t) + "\r\n	\r\n</div>\r\n";
        return __p
    }, this.Formbuilder.templates["partials/edit_styles"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape
        }
        with(obj) __p += "<div class='fb-tab-pane' id='editStyles'>\r\n	" + (null == (__t = Formbuilder.templates["styles/icheck"]()) ? "" : __t) + "\r\n	" + (null == (__t = Formbuilder.templates["styles/select2"]()) ? "" : __t) + "\r\n</div>\r\n";
        return __p
    }, this.Formbuilder.templates["partials/left_side"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape
        }
        with(obj) __p += "<div class='fb-left'>\r\n  <ul class='fb-tabs'>\r\n    <li class='active'><a data-target='#addField' title=\"Add Field\"><i class=\"fa fa-plus\"></i> Field</a></li>\r\n    <li><a data-target='#editField' title=\"Edit Field\"><i class=\"fa fa-edit\"></i> Field</a></li>\r\n    </ul>\r\n\r\n  <div class='fb-tab-content'>\r\n    " + (null == (__t = Formbuilder.templates["partials/add_field"]()) ? "" : __t) + "\r\n    " + (null == (__t = Formbuilder.templates["partials/edit_field"]()) ? "" : __t) + "\r\n    " + (null == (__t = Formbuilder.templates["partials/edit_styles"]()) ? "" : __t) + "\r\n    " + (null == (__t = Formbuilder.templates["partials/edit_form"]()) ? "" : __t) + "\r\n  </div>\r\n</div>";
        return __p
    }, this.Formbuilder.templates["partials/right_side"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape
        }
        with(obj) __p += "<div class='fb-right'>\r\n  " + (null == (__t = Formbuilder.templates["partials/save_button"]()) ? "" : __t) + "\r\n  <div class='fb-no-response-fields'>No response fields</div>\r\n  <div class='fb-response-fields'></div>\r\n</div>\r\n";
        return __p
    }, this.Formbuilder.templates["partials/save_button"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape
        }
        with(obj) __p += '<!-- \r\n<div class=\'testFormPanel\'>\r\n  <label>This is <b>draft view</b>. </label>\r\n  <a href="preview.php" class="button testRealForm">Test Real Form</a> before <b>download</b>.\r\n  <button class=\'js-save-form ' + (null == (__t = Formbuilder.options.BUTTON_CLASS) ? "" : __t) + "'></button>\r\n</div>\r\n -->";
        return __p
    }, this.Formbuilder.templates["styles/icheck"] = function(obj) {
        obj || (obj = {}); {
            var __p = "";
            _.escape, Array.prototype.join
        }
        with(obj) __p += '<section id=\'iCheck\'>\r\n<h4>Checkboxes / Radio Buttons</h4>\r\n<div class="content expand">\r\n\r\n  <label>\r\n    <input type="checkbox" class="iCheckEnabled" data-rv-checked="model.styles.iCheck.enabled" >\r\n    Use beautiful <a href="https://github.com/fronteed/iCheck" target="_blank" title="Highly customizable checkboxes and radio buttons for jQuery and Zepto">iCheck</a> buttons\r\n  </label>\r\n\r\n<div class="skin-flat" data-rv-show="model.styles.iCheck.enabled" style="padding-bottom: 30px;">\r\n  <div class="colors">\r\n    <input type="text" data-rv-value="model.styles.iCheck.colorScheme" class="hide" />\r\n    <label>Select color scheme</label>\r\n    <ul>\r\n      <li data-scheme="black" class="black" title="Black"></li>\r\n      <li data-scheme="red" class="red" title="Red"></li>\r\n      <li data-scheme="green" class="green" title="Green"></li>\r\n      <li data-scheme="blue" class="blue" title="Blue"></li>\r\n      <li data-scheme="aero" class="aero" title="Aero"></li>\r\n      <li data-scheme="grey" class="grey" title="Grey"></li>\r\n      <li data-scheme="orange" class="orange" title="Orange"></li>\r\n      <li data-scheme="yellow" class="yellow" title="Yellow"></li>\r\n      <li data-scheme="pink" class="pink" title="Pink"></li>\r\n      <li data-scheme="purple" class="purple" title="Purple"></li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n\r\n<label>Example:</label>\r\n<img src="css/images/icheck-demo.png" />\r\n\r\n<br />\r\n<br />\r\n</div>\r\n</section>\r\n', setTimeout(function() {
            var a = Formbuilder.formSettingModel.get("styles.iCheck.colorScheme");
            $("#iCheck .colors li." + a).addClass("active"), $("input.iCheckEnabled").change(function() {
                $(document).trigger("iCheck:change")
            }), $("#iCheck .colors").on({
                click: function(a) {
                    a.preventDefault();
                    var b = $(a.target),
                        c = b.data("scheme");
                    return Formbuilder.formSettingModel.set("styles.iCheck.colorScheme", c), $("#iCheck .colors li").removeClass("active"), b.addClass("active"), $(document).trigger("iCheck:change"), !1
                }
            }, "li")
        }, 350);
        return __p
    }, this.Formbuilder.templates["styles/select2"] = function(obj) {
        obj || (obj = {}); {
            var __p = "";
            _.escape
        }
        with(obj) __p += '<section id=\'select2\'>\r\n<h4>Dropdown Style</h4>\r\n<div class="content expand">\r\n\r\n  <label>\r\n    <input type="checkbox" class="iCheckEnabled" data-rv-checked="model.styles.Select2.enabled" >\r\n    Use beautiful <a href="https://github.com/fronteed/iCheck" target="_blank" title="Highly customizable checkboxes and radio buttons for jQuery and Zepto">iCheck</a> style with image support\r\n  </label>\r\n\r\n<label>Example:</label>\r\n<img src="css/images/select2-demo.png" />\r\n\r\n<br />\r\n<br />\r\n</div>\r\n</section>';
        return __p
    }, this.Formbuilder.templates["validators/alphanumeric"] = function(obj) {
        obj || (obj = {}); {
            var __p = "";
            _.escape
        }
        with(obj) __p += "";
        return __p
    }, this.Formbuilder.templates["validators/creditcard"] = function(obj) {
        obj || (obj = {}); {
            var __p = "";
            _.escape
        }
        with(obj) __p += "";
        return __p
    }, this.Formbuilder.templates["validators/date"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape
        }
        with(obj) __p += "<label>\r\n	Date Range:\r\n	<input type='text' data-rv-value='model." + (null == (__t = Formbuilder.options.mappings.VALIDATORS) ? "" : __t) + ".date.range' />\r\n</label>";
        return __p
    }, this.Formbuilder.templates["validators/digits"] = function(obj) {
        obj || (obj = {}); {
            var __p = "";
            _.escape
        }
        with(obj) __p += "";
        return __p
    }, this.Formbuilder.templates["validators/email"] = function(obj) {
        obj || (obj = {}); {
            var __p = "";
            _.escape
        }
        with(obj) __p += "";
        return __p
    }, this.Formbuilder.templates["validators/equalto"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape, Array.prototype.join
        }
        with(obj) {
            __p += '<label>\r\n	Select a field to comapre:\r\n  <select data-rv-value="model.' + (null == (__t = Formbuilder.options.mappings.VALIDATORS) ? "" : __t) + '.equalto.val">\r\n  <option value=""></option>\r\n    ', App.Builder.mainView.collection.sort();
            var type, fildTypes = ",text,number,email,date,";
            _.each(App.Builder.mainView.collection.models, function(a) {
                type = "," + a.get(Formbuilder.options.mappings.FIELD_TYPE) + ",", -1 !== fildTypes.indexOf(type) && a.cid != Formbuilder.rf.cid && (__p += '\r\n      <option value="#' + (null == (__t = a.get("cid")) ? "" : __t) + '">' + (null == (__t = a.get("cid") + ": " + a.get("label")) ? "" : __t) + "</option>\r\n    ")
            }), __p += "\r\n  </select>\r\n\r\n</label>"
        }
        return __p
    }, this.Formbuilder.templates["validators/max"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape
        }
        with(obj) __p += "<label>\r\n	Value:\r\n	<input type='text' data-rv-value='model." + (null == (__t = Formbuilder.options.mappings.VALIDATORS) ? "" : __t) + ".max.val' />\r\n</label>\r\n\r\n<label style=\"display: none;\">\r\n	Unit: \r\n	<select data-rv-value='model." + (null == (__t = Formbuilder.options.mappings.VALIDATORS) ? "" : __t) + ".max.unit'>\r\n		<option value=''></option>	\r\n		<option value='char'>Character</option>	\r\n		<option value='word'>Word</option>	\r\n		<option value='string'>String</option>	\r\n		<option value='number'>Number</option>	\r\n		<option value='date'>Date</option>	\r\n	</select>\r\n</label>\r\n";
        return __p
    }, this.Formbuilder.templates["validators/maxlength"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape
        }
        with(obj) __p += "<label>\r\n	Value: \r\n	<input type='text' data-rv-value='model." + (null == (__t = Formbuilder.options.mappings.VALIDATORS) ? "" : __t) + ".maxlength.val' />\r\n</label>\r\n";
        return __p
    }, this.Formbuilder.templates["validators/min"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape
        }
        with(obj) __p += "<label>\r\n	Value: \r\n	<input type='text' data-rv-value='model." + (null == (__t = Formbuilder.options.mappings.VALIDATORS) ? "" : __t) + ".min.val' />\r\n</label>\r\n\r\n<label style=\"display: none;\">\r\n	Unit: \r\n	<select data-rv-value='model." + (null == (__t = Formbuilder.options.mappings.VALIDATORS) ? "" : __t) + ".min.unit'>\r\n		<option value=''></option>	\r\n		<option value='char'>Character</option>	\r\n		<option value='word'>Word</option>	\r\n		<option value='string'>String</option>	\r\n		<option value='number'>Number</option>	\r\n		<option value='date'>Date</option>	\r\n	</select>\r\n</label>\r\n";
        return __p
    }, this.Formbuilder.templates["validators/minlength"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape
        }
        with(obj) __p += "<label>\r\n	Value: \r\n	<input type='text' data-rv-value='model." + (null == (__t = Formbuilder.options.mappings.VALIDATORS) ? "" : __t) + ".minlength.val' />\r\n</label>\r\n";
        return __p
    }, this.Formbuilder.templates["validators/number"] = function(obj) {
        obj || (obj = {}); {
            var __p = "";
            _.escape
        }
        with(obj) __p += "";
        return __p
    }, this.Formbuilder.templates["validators/pattern"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape
        }
        with(obj) __p += "<label>\r\n	<input type='text' class=\"pattern\" data-rv-value='model." + (null == (__t = Formbuilder.options.mappings.VALIDATORS) ? "" : __t) + ".pattern.val' />\r\n</label>";
        return __p
    }, this.Formbuilder.templates["validators/required"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape
        }
        with(obj) __p += "<!-- <label>Message: <input type='text' data-rv-value='model." + (null == (__t = Formbuilder.options.mappings.VALIDATORS) ? "" : __t) + ".required.msg | validatorMsg required' /></label> -->\r\n";
        return __p
    }, this.Formbuilder.templates["validators/url"] = function(obj) {
        obj || (obj = {}); {
            var __p = "";
            _.escape
        }
        with(obj) __p += "";
        return __p
    }, this.Formbuilder.templates["view/base"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape, Array.prototype.join
        }
        with(obj) __p += "<div class='subtemplate-wrapper'>\r\n\r\n<div class='form-group ", rf.get(Formbuilder.options.mappings.HIDDEN) && (__p += "hiddenField"), __p += "'>\r\n  <div class='cover'></div>\r\n  " + (null == (__t = Formbuilder.templates["view/label"]({
            rf: rf
        })) ? "" : __t) + "\r\n\r\n  " + (null == (__t = Formbuilder.fields[rf.get(Formbuilder.options.mappings.FIELD_TYPE)].view({
            rf: rf
        })) ? "" : __t) + "\r\n\r\n  " + (null == (__t = Formbuilder.templates["view/description"]({
            rf: rf
        })) ? "" : __t) + "\r\n</div>\r\n\r\n  " + (null == (__t = Formbuilder.templates["view/duplicate_remove"]({
            rf: rf
        })) ? "" : __t) + "\r\n</div>\r\n";
        return __p
    }, this.Formbuilder.templates["view/base_non_input"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape, Array.prototype.join
        }
        with(obj) __p += "<div class='subtemplate-wrapper'>\r\n	<div class='", rf.get(Formbuilder.options.mappings.HIDDEN) && (__p += "hiddenField"), __p += "'>\r\n	  " + (null == (__t = Formbuilder.fields[rf.get(Formbuilder.options.mappings.FIELD_TYPE)].view({
            rf: rf
        })) ? "" : __t) + "\r\n	</div>\r\n	" + (null == (__t = Formbuilder.templates["view/duplicate_remove"]({
            rf: rf
        })) ? "" : __t) + "\r\n</div>\r\n";
        return __p
    }, this.Formbuilder.templates["view/checkboxes"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape
        }
        with(obj) __p += null == (__t = Formbuilder.templates["view/options"]({
            type: "checkbox",
            rf: rf
        })) ? "" : __t;
        return __p
    }, this.Formbuilder.templates["view/creditcard"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape, Array.prototype.join
        }
        with(obj) {
            var ccLabel = function(a, b) {
                var c = rf.get("subfields." + a + ".label");
                return c ? c : b
            };
            __p += '\r\n<div class="form-group required">\r\n	<label for="ccNumber" class="control-label">' + (null == (__t = ccLabel("ccNumber", "Card number")) ? "" : __t) + '</label> <abbr title="required">*</abbr>\r\n	<input id="ccNumber" type="tel" class="input-lg form-control ccNumber" autocomplete="ccNumber" placeholder="ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¢ ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¢ ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¢ ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¢" required>\r\n</div>\r\n\r\n<div class="form-group required">\r\n	<label for="ccFullname" class="control-label">' + (null == (__t = ccLabel("ccFullname", "Name on card")) ? "" : __t) + '</label> <abbr title="required">*</abbr>\r\n	<input id="ccFullname" type="text" class="input-lg form-control ccFullname" autocomplete="ccFullname" required>\r\n</div>\r\n\r\n<div class="form-group required">\r\n	<label for="ccExpiryDate" class="control-label">' + (null == (__t = ccLabel("ccExpiryDate", "Expiration date")) ? "" : __t) + '</label> <abbr title="required">*</abbr>\r\n	<input id="ccExpiryDate" type="tel" class="input-lg form-control ccExpiryDate" autocomplete="ccExpiryDate" placeholder="mm/yy" required>\r\n</div>\r\n\r\n<div class="form-group required">\r\n	<label for="ccCVC" class="control-label">' + (null == (__t = ccLabel("ccCVC", "Card CVC")) ? "" : __t) + '</label> <abbr title="required">*</abbr>\r\n	<input id="ccCVC" type="tel" class="input-lg form-control ccCVC" autocomplete="off" placeholder="ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¢" required>\r\n</div>\r\n'
        }
        return __p
    }, this.Formbuilder.templates["view/date"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape, Array.prototype.join
        }
        with(obj) {
            var cid = rf.get("cid");
            __p += "\n" + (null == (__t = Formbuilder.templates["view/input-group-addon"]({
                position: "left",
                rf: rf
            })) ? "" : __t) + "\n	<input type='text' placeholder=\"" + (null == (__t = rf.get(Formbuilder.options.mappings.PLACEHOLDER)) ? "" : __t) + "\" class='form-control' name='" + (null == (__t = cid) ? "" : __t) + "' id='" + (null == (__t = cid) ? "" : __t) + "'/>\n" + (null == (__t = Formbuilder.templates["view/input-group-addon"]({
                position: "right",
                rf: rf
            })) ? "" : __t) + "\n"
        }
        return __p
    }, this.Formbuilder.templates["view/description"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape, Array.prototype.join
        }
        with(obj) {
            var desc = rf.get(Formbuilder.options.mappings.DESCRIPTION);
            desc && (__p += "\r\n<span class='help-block'>\r\n  " + (null == (__t = Formbuilder.helpers.simple_format(desc)) ? "" : __t) + "\r\n</span>\r\n"), __p += "\r\n"
        }
        return __p
    }, this.Formbuilder.templates["view/dropdown"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape, Array.prototype.join
        }
        with(obj) {
            __p += (null == (__t = Formbuilder.templates["view/input-group-addon"]({
                position: "left",
                rf: rf
            })) ? "" : __t) + '\r\n<select class="form-control">\r\n  ';
            for (i in rf.get(Formbuilder.options.mappings.OPTIONS) || []) {
                var label = String(rf.get(Formbuilder.options.mappings.OPTIONS)[i].label).trim();
                "" != label && "null" != label && (__p += "\r\n    <option " + (null == (__t = rf.get(Formbuilder.options.mappings.OPTIONS)[i].checked && "selected") ? "" : __t) + ">\r\n      " + (null == (__t = label) ? "" : __t) + "\r\n    </option>\r\n  ")
            }
            __p += "\r\n</select>\r\n" + (null == (__t = Formbuilder.templates["view/input-group-addon"]({
                position: "right",
                rf: rf
            })) ? "" : __t)
        }
        return __p
    }, this.Formbuilder.templates["view/duplicate_remove"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape, Array.prototype.join
        }
        with(obj) {
            var type = rf.get(Formbuilder.options.mappings.FIELD_TYPE),
                minOne = Formbuilder.helpers.minOne(type),
                onlyOne = Formbuilder.helpers.onlyOne(type);
            __p += "\r\n<div class='actions-wrapper'>\r\n  <a class=\"js-duplicate " + (null == (__t = Formbuilder.options.BUTTON_CLASS) ? "" : __t) + '" title="Duplicate Field" ', onlyOne && (__p += ' style="display:none" '), __p += "><i class='fa fa-plus-circle'></i></a>\r\n  <a class=\"js-clear " + (null == (__t = Formbuilder.options.BUTTON_CLASS) ? "" : __t) + '" title="Remove Field" ', minOne && (__p += ' style="display:none" '), __p += "><i class='fa fa-minus-circle'></i></a>\r\n</div>"
        }
        return __p
    }, this.Formbuilder.templates["view/file"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape, Array.prototype.join
        }
        with(obj) {
            var id = rf.get("cid");
            __p += '\r\n<input type="file" class="form-control" id="' + (null == (__t = id) ? "" : __t) + '" name="' + (null == (__t = id) ? "" : __t) + '" value=""     />\r\n', $.doWhenReady("#" + id, function() {
                $("#" + id).fileinput()
            }, 350), __p += "\r\n"
        }
        return __p
    }, this.Formbuilder.templates["view/input-group-addon"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape, Array.prototype.join
        }
        with(obj) {
            var leftIcon = rf.get("field_options.addon.leftIcon"),
                leftText = rf.get("field_options.addon.leftText"),
                rightIcon = rf.get("field_options.addon.rightIcon"),
                rightText = rf.get("field_options.addon.rightText"),
                isGroup = leftIcon || leftText || rightIcon || rightText;
            if (!isGroup) return "";
            "left" == position ? (__p += '\n<div class="input-group">\n	', (leftIcon || leftText) && (__p += ' <span class="input-group-addon">', leftIcon && (__p += ' <i class="' + (null == (__t = leftIcon) ? "" : __t) + '"></i> '), __p += " " + (null == (__t = leftText) ? "" : __t) + "</span> "), __p += "\n") : (__p += "\n	", (rightIcon || rightText) && (__p += ' <span class="input-group-addon"> ', rightIcon && (__p += ' <i class="' + (null == (__t = rightIcon) ? "" : __t) + '"></i> '), __p += " " + (null == (__t = rightText) ? "" : __t) + "</span> "), __p += "\n</div>\n"), __p += "\n"
        }
        return __p
    }, this.Formbuilder.templates["view/label"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape, Array.prototype.join
        }
        with(obj) __p += '\r\n<label class="control-label" ', rf.get("labelHide") && (__p += 'style="display:none;"'), __p += ">\r\n  <span>" + (null == (__t = Formbuilder.helpers.simple_format(rf.get(Formbuilder.options.mappings.LABEL))) ? "" : __t) + "</span>\r\n  ", rf.get(Formbuilder.options.mappings.VALIDATORS + ".required.enabled") && (__p += "\r\n    <abbr title='required'>*</abbr>\r\n  "), __p += "\r\n</label>\r\n\r\n" + (null == (__t = Formbuilder.templates["view/media"]({
            rf: rf
        })) ? "" : __t) + "\r\n";
        return __p
    }, this.Formbuilder.templates["view/media"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape, Array.prototype.join
        }
        with(obj) {
            var mainDescription = $.trim(rf.get("field_options.mainDescription")),
                images = rf.get("field_options.images"),
                videoEmbed = $.trim(rf.get("field_options.videoEmbed")),
                imgs = [];
            if (images && "undefined" != typeof images.urls)
                for (var slideshow = images.slideshow, urls = images.urls.split("\n"), i = 0, n = urls.length; n > i; i++) {
                    var url = $.trim(urls[i]);
                    if ("" != url && (imgs.push('<img src="' + url + '">'), slideshow && 1 == imgs.length)) break
                }
            if ("" != mainDescription || imgs.length > 0 || "" != videoEmbed) {
                __p += '\r\n<div style="margin-bottom: 10px;">\r\n\r\n';
                var mainDescription = $.trim(rf.get("field_options.mainDescription"));
                if ("" != mainDescription && (__p += '\r\n<div class="mainDescription">\r\n	' + (null == (__t = Formbuilder.helpers.simple_format(mainDescription)) ? "" : __t) + "\r\n</div>	\r\n"), __p += "\r\n\r\n", imgs.length > 0) {
                    var res = images.responsive ? "responsive" : "";
                    __p += '\r\n<div class="imageUrls ' + (null == (__t = res) ? "" : __t) + '">\r\n	' + (null == (__t = imgs.join("\n")) ? "" : __t) + "\r\n</div>	\r\n"
                }
                __p += "\r\n\r\n", "" != videoEmbed && (__p += '\r\n<div class="video-container">\r\n	' + (null == (__t = videoEmbed) ? "" : __t) + "\r\n</div>	\r\n"), __p += "\r\n\r\n</div>\r\n"
            }
            __p += "\r\n"
        }
        return __p
    }, this.Formbuilder.templates["view/number"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape, Array.prototype.join
        }
        with(obj) {
            var cid = rf.get("cid");
            __p += "\n" + (null == (__t = Formbuilder.templates["view/input-group-addon"]({
                position: "left",
                rf: rf
            })) ? "" : __t) + "\n<input type='text' placeholder=\"" + (null == (__t = rf.get(Formbuilder.options.mappings.PLACEHOLDER)) ? "" : __t) + "\" class='form-control' name='" + (null == (__t = cid) ? "" : __t) + "' id='" + (null == (__t = cid) ? "" : __t) + "'/>\n" + (null == (__t = Formbuilder.templates["view/input-group-addon"]({
                position: "right",
                rf: rf
            })) ? "" : __t) + "\n", rf.get("field_options.numSpinner.enabled") && $.doWhenReady("#" + cid, function() {
                $(this).TouchSpin()
            })
        }
        return __p
    }, this.Formbuilder.templates["view/options"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape, Array.prototype.join
        }
        with(obj) {
            var cid = rf.get("cid"),
                options = rf.get(Formbuilder.options.mappings.OPTIONS);
            for (var i in options || []) {
                var opt = options[i],
                    label = String(opt.label).trim(),
                    image = String(opt.image).trim(),
                    checked = opt.checked ? "checked" : "";
                "" != label && "null" != label && (__p += "\r\n  <div class='" + (null == (__t = type) ? "" : __t) + "'>\r\n      <input type='" + (null == (__t = type) ? "" : __t) + "' " + (null == (__t = checked) ? "" : __t) + " name='" + (null == (__t = cid) ? "" : __t) + "' />\r\n    <label>\r\n    ", __p += "" == image || "null" == image || "undefined" == image ? "\r\n      " + (null == (__t = label) ? "" : __t) + "\r\n    " : '\r\n  		<img src="' + (null == (__t = image) ? "" : __t) + '" />\r\n  		<span>' + (null == (__t = label) ? "" : __t) + "</span>\r\n    ", __p += "\r\n    </label>\r\n  </div>\r\n")
            }
            setTimeout(function() {
                $(document).trigger("iCheck:change")
            }, 350), __p += "\r\n"
        }
        return __p
    }, this.Formbuilder.templates["view/radio"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape
        }
        with(obj) __p += null == (__t = Formbuilder.templates["view/options"]({
            type: "radio",
            rf: rf
        })) ? "" : __t;
        return __p
    }, this.Formbuilder.templates["view/recaptcha"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape
        }
        with(obj) __p += '<div class="form-group">\r\n	<img src="css/images/recaptcha-theme-' + (null == (__t = App.Helper.attrVal(rf, "recaptcha.theme", "light")) ? "" : __t) + '.png">\r\n</div>\r\n';
        return __p
    }, this.Formbuilder.templates["view/signature"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape, Array.prototype.join
        }
        with(obj) {
            var cid = rf.get("cid");
            __p += "\n<div>\n<canvas id='" + (null == (__t = cid) ? "" : __t) + "' width=\"" + (null == (__t = rf.get("signature.width")) ? "" : __t) + '" height="' + (null == (__t = rf.get("signature.height")) ? "" : __t) + '" style="border: 2px solid #cccccc;display: block;"></canvas>\n<button type="button" class=\'clearCavans\'>' + (null == (__t = rf.get("signature.labelClear")) ? "" : __t) + "</button>\n</div>"
        }
        return __p
    }, this.Formbuilder.templates["view/submit"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape, Array.prototype.join
        }
        with(obj) {
            __p += (null == (__t = Formbuilder.templates["view/label"]({
                rf: rf
            })) ? "" : __t) + '\r\n<div class="form-group">\r\n';
            var icon = rf.get("submit.icon");
            (null == (__t = Formbuilder.templates["view/description"]({
                rf: rf
            })) ? "" : __t) + "\r\n"
        }
        return __p
    }, this.Formbuilder.templates["view/text"] = function(obj) {
        obj || (obj = {}); {
            var __t, __p = "";
            _.escape, Array.prototype.join
        }
        with(obj) {
            var cid = rf.get("cid");
            __p += "\n" + (null == (__t = Formbuilder.templates["view/input-group-addon"]({
                position: "left",
                rf: rf
            })) ? "" : __t) + "\n<input type='text' placeholder=\"" + (null == (__t = rf.get(Formbuilder.options.mappings.PLACEHOLDER)) ? "" : __t) + "\" class='form-control' name='" + (null == (__t = cid) ? "" : __t) + "' id='" + (null == (__t = cid) ? "" : __t) + "'/>\n" + (null == (__t = Formbuilder.templates["view/input-group-addon"]({
                position: "right",
                rf: rf
            })) ? "" : __t) + "\n"
        }
        return __p
    },
    function(a) {
        var b = a({});
        a.on = function() {
            b.on.apply(b, arguments)
        }, a.off = function() {
            b.off.apply(b, arguments)
        }, a.trigger = function() {
            b.trigger.apply(b, arguments)
        }
    }(jQuery),
    function() {
        function a() {
            var a, c = function() {
                    a.collection.add(new f)
                },
                d = function(d, e) {
                    Formbuilder.lcv = a = new Backbone.CollectionView({
                        el: $("#logics"),
                        selectable: !0,
                        modelView: i,
                        collection: new g(e)
                    }), Formbuilder.lcv.render();
                    var f = function(b, c) {
                        confirm("Are you sure you want to remove this logic set?") && (a.collection.remove(c), $(document).trigger("logic:change", c))
                    };
                    $(document).on("logic:remove", f), $("#btnAddLogic").click(c);
                    new b
                };
            $(document).on("logicCollectionView:render", d)
        }
        var b = Backbone.Model.extend({
                initialize: function() {
                    this.initDialog(), $(document).on("selectFieldsDialog:open", this.openDialog), $("#logics").on({
                        click: function(a) {
                            console.log(a.target);
                            var b = $(a.target);
                            $(document).trigger("selectFieldsDialog:open", [b])
                        }
                    }, "input.logic-selector, input.logic-rule-selector")
                },
                renderFields: function() {
                    var a = new Backbone.CollectionView({
                        el: $("#selectFieldsContainer"),
                        selectable: !1,
                        modelView: h,
                        collection: App.Builder.mainView.collection
                    });
                    a.render()
                },
                initDialog: function() {
                    this.renderFields(), $("#selectFieldsDialog").dialog({
                        resizable: !1,
                        position: {
                            my: "center",
                            at: "center",
                            of: window
                        },
                        height: 300,
                        minWidth: 400,
                        width: 400,
                        autoOpen: !1,
                        modal: !0,
                        buttons: {
                            Confirm: function() {
                                var a = $("#selectFieldsContainer").data("srcElement"),
                                    b = a.hasClass("logic-rule-selector"),
                                    c = b ? "input[type=radio]:checked" : "input[type=checkbox]:checked",
                                    d = [];
                                $("#selectFieldsContainer").find(c).each(function() {
                                    d.push($(this).val())
                                }), $("#label-" + a.prop("id")).html(App.Helper.cidToLabel(d + "")), a.val(d).change(), $(this).dialog("close")
                            }
                        }
                    })
                },
                openDialog: function(a, b) {
                    App.Builder.mainView.collection.sort();
                    var c = b.hasClass("logic-rule-selector");
                    c ? ($("#selectFieldsContainer label.checkbox").hide(), $("#selectFieldsContainer label.radio").show()) : ($("#selectFieldsContainer label.checkbox").show(), $("#selectFieldsContainer label.radio").hide());
                    var d = "," + b.val() + ",",
                        e = $("#selectFieldsDialog");
                    $("#selectFieldsContainer").data("srcElement", b).find("input").each(function() {
                        var a = -1 !== d.indexOf("," + $(this).val() + ",");
                        $(this).prop("checked", a)
                    }), e.dialog("open")
                }
            }),
            c = Backbone.Model.extend({
                defaults: {
                    disabled: !1,
                    selector: "",
                    condition: "",
                    value: ""
                },
                initialize: function() {
                    var a = this,
                        b = function(b, c) {
                            c.cid == a.cid && a.set("value", c.value)
                        };
                    $(document).on("logic.rule.setValue." + a.cid, b)
                },
                cidToLabel: function() {
                    return App.Helper.cidToLabel(this.get("selector"))
                }
            }),
            d = Backbone.Collection.extend({
                model: c
            }),
            e = Backbone.View.extend({
                tagName: "li",
                events: {
                    "click a.removeLogicRule": "removeLogicRule",
                    "change .itemAttr": "attrChange"
                },
                initialize: function() {},
                removeLogicRule: function() {
                    this.logicView.trigger("logicRule:remove", this.model)
                },
                change: function() {
                    return console.log("LogicRuleView model change ", this.model), this
                },
                attrChange: function() {
                    $(document).trigger("logicRuleItemModelChange", [this.model]), this.model.trigger("change")
                },
                template: Formbuilder.templates["edit/logic_rule_item"],
                render: function() {
                    var a = (this.model.toJSON(), this.template(this.model)),
                        b = this.$el.find('div[data-logicRuleItem-cid="' + this.model.cid + '"]');
                    b.length ? b.replaceWith(a) : this.$el.append(a), rivets.bind(this.$el, {
                        item: this.model
                    })
                }
            }),
            f = Backbone.Model.extend({
                defaults: {
                    disabled: !1,
                    action: "",
                    selector: "",
                    match: "",
                    rules: []
                },
                initialize: function(a) {
                    "undefined" == typeof a && (a = this.defaults);
                    var b = "undefined" == typeof a.rules ? [] : a.rules;
                    return void this.set("rules", new d(b))
                },
                cidToLabel: function() {
                    return App.Helper.cidToLabel(this.get("selector"))
                },
                onRuleItemChange: function(a) {
                    console.log("onRuleItemChange", a)
                }
            }),
            g = Backbone.Collection.extend({
                model: f
            }),
            h = Backbone.View.extend({
                tagName: "li",
                events: {},
                initialize: function() {
                    this.listenTo(this.model, "change", this.change)
                },
                change: function() {
                    return this.render(), this
                },
                template: Formbuilder.templates["edit/logic_item_option"],
                render: function() {
                    var a = this.model.toJSON(),
                        b = this.template(a),
                        c = this.$el.find('div[data-logic-set-cid="' + a.cid + '"]');
                    c.length ? c.replaceWith(b) : this.$el.append(b)
                }
            }),
            i = Backbone.View.extend({
                tagName: "li",
                logicRuleCollectionView: null,
                events: {
                    "click a.removeLogic": "removeLogic",
                    "click .btnAddRule": "addRule"
                },
                addRule: function() {
                    this.logicRuleCollectionView.collection.add(new c)
                },
                initialize: function() {
                    this.listenTo(this.model, "change", this.change), $(document).trigger("addRule:click", [this.model]), this.on("logicRule:remove", this.removeLogicRule)
                },
                removeLogic: function() {
                    $(document).trigger("logic:remove", this.model)
                },
                removeLogicRule: function(a) {
                    confirm("Are you sure you want to remove this rule?") && this.logicRuleCollectionView.collection.remove(a)
                },
                change: function() {
                    console.log("LogicView model logic:change", JSON.stringify(this.model))
                },
                template: Formbuilder.templates["edit/logic_item"],
                render: function() {
                    var a = (this.model.toJSON(), this.template(this.model)),
                        b = this.$el.find('div[data-logicItem-cid="' + this.model.cid + '"]');
                    b.length ? b.replaceWith(a) : this.$el.append(a), rivets.bind(this.$el, {
                        logic: this.model
                    }), this.renderLogicRuleCollectionView()
                },
                renderLogicRuleCollectionView: function() {
                    null != this.logicRuleCollectionView;
                    var a = new Backbone.CollectionView({
                        el: $("#logic-rules-" + this.model.cid),
                        selectable: !0,
                        modelView: e.extend({
                            logicView: this
                        }),
                        collection: this.model.get("rules")
                    });
                    this.logicRuleCollectionView = a;
                    this.$el, this.model;
                    setTimeout(function() {
                        a.render()
                    }, 500)
                }
            });
        a()
    }(),
    function() {
        var a = new Backbone.Model({});
        Formbuilder.LogicManager = a, Formbuilder.LogicActions = ["show", "hide", "jump to", "disable", "enable"]
    }(),
    function() {
        var a, b, c = Backbone.Model.extend({
            initialize: function() {
                this.initDialog(), $(document).on("optionEditor:open", this.openDialog), console.log("init OptionEditor..."), $("#editField").on({
                    click: function(a) {
                        var b = $(a.target);
                        $(document).trigger("optionEditor:open", [b])
                    }
                }, "button.editOptions"), $("#hotOptionEditor a.showHelp").click(function(a) {
                    a.preventDefault(), $("#hotOptionEditor ul").toggleClass("hide"), 1 == $("#hotOptionEditor ul:visible").length ? ($("#hotTable").hide(), $(this).addClass("button").text("Go back edit options")) : ($("#hotTable").show(), $(this).removeClass("button").text("Show help and more config"))
                }), $imgUrl = $("#hotOptionEditor input[name=imgBaseUrl]"), $imgUrl.change(function() {
                    Formbuilder.rf.set(Formbuilder.options.mappings.BASE_IMAGE_URL, $(this).val())
                })
            },
            render: function() {
                this.createHotInstance(), this.updateData()
            },
            getData: function() {
                return Formbuilder.rf.get(Formbuilder.options.mappings.OPTIONS)
            },
            setData: function() {
                var b, c, d = a.getData();
                for (c = d.length - 1; c >= 0; c--) "undefined" != typeof d[c].label && (b = String(d[c].label).trim(), ("" == b || "null" == b) && d.splice(c, 1));
                Formbuilder.rf.set(Formbuilder.options.mappings.OPTIONS, d), Formbuilder.rf.trigger("change")
            },
            removeSlectedRows: function() {
                var b = a.getSelected();
                if ("undefined" != typeof b) {
                    var c = Math.min(b[0], b[2]),
                        d = Math.max(b[0], b[2]),
                        e = d - c + 1;
                    if (confirm("Are you sure you want to delete selected " + e + (e > 1 ? " options?" : " option?"))) {
                        for (var f = a.getData(), g = f.length - 1; g >= 0; g--) g >= c && d >= g && f.splice(g, 1);
                        a.render(), this.setData()
                    }
                }
            },
            addRow: function() {
                for (var b = a.countRows() - 1, c = 0; 10 > c; c++) a.alter("insert_row");
                a.selectCell(b, 1)
            },
            createHotInstance: function() {
                var b = Formbuilder.rf.get(Formbuilder.options.mappings.FIELD_TYPE),
                    c = [80, 200, 140, 140],
                    d = ["dropdown" == b ? "Selected" : "Checked", "Text", "Value", "Image"],
                    e = [{
                        data: "checked",
                        type: "checkbox"
                    }, {
                        data: "label"
                    }, {
                        data: "value"
                    }, {
                        data: "image"
                    }];
                "autocomplete" == b && (c.splice(0, 1), d.splice(0, 1), e.splice(0, 1)), a = new Handsontable(document.getElementById("hotTable"), {
                    data: [],
                    outsideClickDeselects: !1,
                    colHeaders: d,
                    colWidths: c,
                    manualColumnResize: !0,
                    contextMenu: ["row_above", "row_below", "remove_row"],
                    columns: e,
                    minSpareRows: 1
                })
            },
            updateData: function() {
                a.loadData(Formbuilder.rf.get(Formbuilder.options.mappings.OPTIONS))
            },
            initDialog: function() {
                var a = this;
                $("#hotOptionEditor").dialog({
                    title: "Edit Options",
                    resizable: !0,
                    position: {
                        my: "center",
                        at: "center",
                        of: window
                    },
                    height: 400,
                    minWidth: 600,
                    width: 600,
                    autoOpen: !1,
                    modal: !0,
                    close: function() {
                        a.setData()
                    },
                    buttons: {
                        "+ Add": function() {
                            a.addRow()
                        },
                        Delete: function() {
                            a.removeSlectedRows()
                        },
                        Update: function() {
                            $(this).dialog("close")
                        }
                    }
                })
            },
            openDialog: function() {
                b.render(), $imgUrl = $("#hotOptionEditor input[name=imgBaseUrl]"), $imgUrl.val(Formbuilder.rf.get(Formbuilder.options.mappings.BASE_IMAGE_URL));
                var a = $("#hotOptionEditor");
                a.dialog("open")
            },
            closeDialog: function() {
                var a = $("#hotOptionEditor");
                a.dialog("close")
            }
        });
        $(document).on("handsontable:render_options", function() {
            b || (b = new c)
        })
    }(),
    function(a) {
        a.doWhenReady = function(b, c, d, e) {
            var f, g = 0,
                d = d || 350,
                e = e || 3e5,
                h = function() {
                    a(b).length >= 1 && (setTimeout(function() {
                        return a(b).each(function() {
                            c.apply(this, arguments)
                        })
                    }, 350), clearInterval(f)), g++, g * d > e && clearInterval(f)
                };
            f = setInterval(h, d)
        }
    }(jQuery),
    function(a) {
        var b, c, d = 150,
            e = function(e) {
                b = setInterval(function() {
                    return a(e).length ? (clearInterval(b), a(e).each(function() {
                        c.apply(this, arguments)
                    })) : void 0
                }, d)
            };
        a.doIfExists = function(a, b, f) {
            return c = b, f && (d = f), e(a)
        }
    }(jQuery), String.prototype.trim || ! function() {
        var a = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        String.prototype.trim = function() {
            return this.replace(a, "")
        }
    }(),
    function() {
        var a = {};
        a.Helper = {
            attrVal: function(a, b, c) {
                var d = a.get(b);
                return d ? d : c
            },
            cidToLabel: function(b) {
                var c, d, e, f = b.split(","),
                    g = [];
                for (c = 0, d = f.length; d > c; c++) e = a.Builder.mainView.collection.where({
                    cid: f[c]
                }), _.isArray(e) && 1 === e.length && e[0].attributes && g.push("<div><b>" + f[c] + ":</b><span>" + e[0].get("label") + "</span></div>");
                return g.join("\n")
            }
        }, Formbuilder.validators = {}, Formbuilder.options.mappings.VALIDATORS = {}, Formbuilder.registerValidator = function(a) {
            Formbuilder.validators[a.id] = a
        }, Formbuilder.includePlaceholder = function(a) {
            var b = ",text,paragraph,date,number,email,";
            return -1 != b.indexOf("," + a + ",") ? Formbuilder.templates["edit/placeholder"]() : ""
        };
        var b = {
            PLACEHOLDER: "field_options.placeholder",
            SENDER: "field_options.sender",
            VALIDATORS: "field_options.validators",
            SESSION: "field_options.session",
            HIDDEN: "field_options.hidden",
            MESSAGES: "field_options.messages",
            LOGIC: "field_options.logic",
            MASK: "field_options.mask",
            FILE: "field_options.file",
            TYPE: "field_options.type",
            BASE_IMAGE_URL: "field_options.baseImgUrl",
            ANSWER: "field_options.answer",
            MULTIPLE: "field_options.multiple",
            DATE: "field_options.date"
        };
        _.extend(Formbuilder.options.mappings, b);
        var c = [{
            id: "required",
            msg: "This field is required."
        }, {
            id: "email",
            msg: "Please enter a valid email address.",
            for_fields: "text,paragraph"
        }, {
            id: "number",
            msg: "Please enter a valid number."
        }, {
            id: "alphanumeric",
            msg: "Letters, numbers, and underscores only please."
        }, {
            id: "url",
            msg: "Please enter a valid URL."
        }, {
            id: "min",
            msg: "Please enter a value greater than or equal to {0}"
        }, {
            id: "max",
            msg: "Please enter a value less than or equal to {0}."
        }, {
            id: "minlength",
            msg: "Please enter at least {0} characters.",
            checkboxes_msg: "Please select at least {0} option(s)",
            dropdown_msg: "Please select at least {0} option(s)"
        }, {
            id: "maxlength",
            msg: "Please enter no more than {0} characters.",
            checkboxes_msg: "Please select no more than {0} option(s)",
            dropdown_msg: "Please select no more than {0} option(s)"
        }, {
            id: "equalto",
            msg: "Please enter the same value again."
        }, {
            id: "pattern",
            msg: "Invalid format."
        }];
        _.each(c, function(a) {
            Formbuilder.registerValidator(a)
        }), rivets.formatters.validatorMsg = function(a, b, c) {
            var d = Formbuilder.validators[b],
                e = d.msg;
            return d[c + "_msg"] && (e = d[c + "_msg"], Formbuilder.rf.set(Formbuilder.options.mappings.VALIDATORS + "." + b + ".msg", e)), a || e
        };
        var d = {
            thankyou: "Your form has been sent. Thank You!"
        };
        rivets.formatters.defaultText = function(a, b) {
            return a || (a = d[b]), a
        }, rivets.formatters.json = function(a) {
            return console.log("rivets.formatters.json", a), JSON.stringify(a)
        }, Formbuilder.formSetting = {}, Formbuilder.listenEvents = function() {
            var b = function(b, c) {
                    var d = Formbuilder.lcv.collection.toJSON();
                    c = Formbuilder.formSettingModel.toJSON(), c.logics = d;
                    var e = JSON.stringify(c);
                    a.Builder.mainView.formSaved = !1, $.post("form.php", e).done(function() {
                        console.log("Form saved on server"), a.Builder.mainView.formSaved = !0
                    })
                },
                c = Backbone.DeepModel.extend(),
                d = function(a) {
                    for (var b = 0, c = a.models.length; c > b; b++) {
                        var d = a.models[b].get("field_options");
                        _.isArray(d) && (d = _.extend({}, d), a.models[b].set("field_options", d))
                    }
                    return a
                },
                e = function(a, b) {
                    var c = [];
                    "undefined" != typeof b && _.isFunction(b.sort) && ($("#editForm").is(":visible") || b.sort(), b = d(b), c = b.toJSON()), Formbuilder.formSettingModel.set("fields", c), $(document).trigger("form:save")
                },
                f = function() {
                    $(".fb-left").on({
                        click: function(a) {
                            var b = $(a.currentTarget),
                                c = $(a.currentTarget).siblings("div.content"),
                                d = b.find("span.fa");
                            c.is(":visible") ? (c.hide("slow"), d.addClass("fa-caret-right").removeClass("fa-caret-down"), $(this).hasClass("wide") && $(this).closest("section").removeClass("wide")) : (c.show("slow"), d.addClass("fa-caret-down").removeClass("fa-caret-right"), $(this).hasClass("wide") && $(this).closest("section").addClass("wide"))
                        }
                    }, "section > h4"), $("section > h4").append("<span class='symbol'><span class='fa fa-caret-right'></span></span>"), $("div.content.expand").siblings("h4").click()
                },
                g = function() {
                    $(".fb-left").on({
                        click: function(a) {
                            a.preventDefault();
                            var b = $(a.currentTarget),
                                c = $(a.currentTarget).siblings("div.moreOptions"),
                                d = b.find("span.fa");
                            c.is(":visible") ? (c.hide("slow"), d.addClass("fa-caret-right").removeClass("fa-caret-down")) : (c.show("slow"), d.addClass("fa-caret-down").removeClass("fa-caret-right"))
                        }
                    }, "a.moreOptions")
                },
                h = function() {
                    $("#mailersConfig").on({
                        click: function(a) {
                            var b = $(a.target);
                            $("section.mailer").hide(), $("section.mailer." + b.val()).show("slow")
                        }
                    }, "input[name=mailer]:radio")
                },
                i = function(a, b) {
                    "#editForm" == b ? ($(b).show(), $(".fb-right").hide(), $(".fb-left").css("margin-top", 0)) : ($("#editForm").hide(), $(".fb-right").show())
                },
                j = function() {
                    $(".fb-left").on({
                        focusin: function(a) {
                            $(a.target).siblings("div.hints").show("slow")
                        },
                        focusout: function(a) {
                            $(a.target).siblings("div.hints").hide("slow")
                        }
                    }, 'input[type="text"], textarea, select')
                },
                k = function(b, d) {
                    Formbuilder.formSettingModel = new c(d), a.Builder = new Formbuilder({
                        selector: ".fb-main",
                        bootstrapData: d
                    });
                    var e = Formbuilder.formSettingModel;
                    rivets.bind($("#editForm"), {
                        model: e
                    }), rivets.bind($("#editStyles"), {
                        model: e
                    }), $("#preview").off("click").click(function(b) {
                        function c() {
                            return a.Builder.mainView.formSaved ? (location.href = f, clearInterval(g), !0) : (d.text("Saving ..."), !1)
                        }
                        b.preventDefault();
                        var d = $("#preview"),
                            f = $(this).prop("href"),
                            g = 0,
                            h = e.get("email"),
                            i = e.get("admin");
                        return h.to || "fileOnly" == i.dataDelivery || $("#editForm").is(":visible") ? g = setInterval(c, 150) : bootbox.confirm({
                            message: "<h3>You haven't entered an email address to receive form data.</h3><h3>Want to setup now?</h3>",
                            callback: function(a) {
                                a ? $("a[data-target=#editForm]").trigger("click") : g = setInterval(c, 150)
                            }
                        }), !1
                    }), f(), g(), h(), j(), $(".fb-left a[data-field-type=submit]").hide(), setTimeout(function() {
                        $(document).trigger("logicCollectionView:render", [d.logics]), $(document).trigger("iCheck:change")
                    }, 2e3)
                },
                l = function(a, b) {
                    $(b.selector).length <= 0 || $(b.selector).click().autocomplete({
                        minLength: 0,
                        source: b.source
                    }).on("autocompleteselect", function(a, c) {
                        Formbuilder.rf.set(b.attrId, c.item.value)
                    })
                },
                m = function() {
                    var a = Formbuilder.formSettingModel.get("styles.iCheck.enabled"),
                        b = Formbuilder.formSettingModel.get("styles.iCheck.colorScheme"),
                        c = "black" == b ? "" : "-" + b,
                        d = $(".fb-response-fields input");
                    a ? (d.iCheck({
                        checkboxClass: "icheckbox_flat" + c,
                        radioClass: "iradio_flat" + c
                    }), $(".fb-response-fields").addClass("iCheck")) : ($(".fb-response-fields").removeClass("iCheck"), d.iCheck("destroy"))
                };
            $(document).on("formConfig:ready", k), $(document).on("fields:change", e), $(document).on("form:save", b), $(document).on("tabs:show", i), $(document).on("setupAutoComplete", l), $(document).on("iCheck:change", m)
        }, Formbuilder.listenEvents(), window.App = a
    }();