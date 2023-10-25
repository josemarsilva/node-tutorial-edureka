import Subject from "./subjects/index";
import OrderObserver from "./observables/OrderObserver";import Subject from './subjects/index';

const subject = new Subject();
new OrderObserver(subject);

subject.setValue("new value");