(ns app.client
  (:require
    [com.fulcrologic.fulcro.application :as app]
    [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
    [com.fulcrologic.fulcro.dom :as dom]))

(defonce app (app/fulcro-app))

(def cards
  [{:title   "Hello"
    :message "Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
   {:title   "Hello"
    :message "Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
   {:title   "Hello"
    :message "Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
   {:title   "Hello"
    :message "Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
   {:title   "Hello"
    :message "Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
   {:title   "Hello"
    :message "Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
   {:title   "Hello"
    :message "Lorem ipsum dolor sit amet, consectetur adipisicing elit."}])


(defsc Card [this {:keys [title message]}]
  (dom/div
    (dom/div :.uk-card.uk-card-primary.uk-card-body
             (dom/h3 :.uk-card-title title)
             (dom/p message))))

(def card-ui (comp/factory Card))

(defsc Root [this props]
  (dom/div
    (dom/div
      {:uk-grid ""
       :class "uk-child-width-1-3@m uk-grid-small uk-grid-match"
       :uk-sortable "handle: .uk-card"}
      (doall (for [card cards] (card-ui card))))
    (dom/div
      :.uk-overlay.uk-overlay-primary.uk-position-bottom
      (dom/button :.uk-button.uk-button-primary "Create"))))

(defn ^:export init
  "Shadow-cljs sets this up to be our entry-point function. See shadow-cljs.edn `:init-fn` in the modules of the main build."
  []
  (app/mount! app Root "app")
  (js/console.log "Loaded"))

(defn ^:export refresh
  "During development, shadow-cljs will call this on every hot reload of source. See shadow-cljs.edn"
  []
  ;; re-mounting will cause forced UI refresh, update internals, etc.
  (app/mount! app Root "app")
  ;; As of Fulcro 3.3.0, this addition will help with stale queries when using dynamic routing:
  (comp/refresh-dynamic-queries! app)
  (js/console.log "Hot reload"))
