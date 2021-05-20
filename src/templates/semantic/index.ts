import builder from './builder';
import builderComponent from './builderComponent';
import builderComponents from './builderComponents';
import builderEditForm from './builderEditForm';
import builderPlaceholder from './builderPlaceholder';
import builderSidebar from './builderSidebar';
import builderSidebarGroup from './builderSidebarGroup';
import builderWizard from './builderWizard';
import button from './button';
import checkbox from './checkbox';
import columns from './columns';
import component from './component';
import cssClasses from './cssClasses';
import datagrid from './datagrid';
import day from './day';
import editgrid from './editgrid';
import field from './field';
import fieldset from './fieldset';
import file from './file';
import icon from './icon';
import iconClass from './iconClass';
import input from './input';
import label from './label';
import loader from './loader';
import loading from './loading';
import message from './message';
import multiValueRow from './multiValueRow';
import multiValueTable from './multiValueTable';
import panel from './panel';
import radio from './radio';
import resourceAdd from './resourceAdd';
import select from './select';
import selectOption from './selectOption';
import signature from './signature';
import survey from './survey';
import tab from './tab';
import table from './table';
import tree from './tree';
import treePartials from './tree/partials';
import webform from './webform';
import well from './well';
import wizard from './wizard';
import wizardHeader from './wizardHeader';
import wizardHeaderClassic from './wizardHeaderClassic';
import wizardHeaderVertical from './wizardHeaderVertical';
import wizardNav from './wizardNav';
import alert from './alert';
import errorsList from './errorsList';

export default {
  transform(type, text) {
    if (!text) {
      return text;
    }
    const columns = {
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
      10: 'ten',
      11: 'eleven',
      12: 'twelve',
      13: 'thirteen',
      14: 'fourteen',
      15: 'fifteen',
      16: 'sixteen',
    };
    switch (type) {
      case 'columns':
        return columns.hasOwnProperty(text.toString()) ? columns[text.toString()] : text;
      case 'class':
        return this.cssClasses.hasOwnProperty(text.toString()) ? this.cssClasses[text.toString()] : text;
    }
    return text;
  },
  defaultIconset: 'icon',
  iconClass,
  cssClasses,
  builder,
  builderComponent,
  builderComponents,
  builderEditForm,
  builderPlaceholder,
  builderSidebar,
  builderSidebarGroup,
  builderWizard,
  button,
  checkbox,
  columns,
  component,
  datagrid,
  day,
  editgrid,
  field,
  fieldset,
  file,
  icon,
  input,
  label,
  loader,
  loading,
  message,
  multiValueRow,
  multiValueTable,
  panel,
  radio,
  resourceAdd,
  select,
  selectOption,
  signature,
  survey,
  tab,
  tree,
  ...treePartials,
  table,
  webform,
  well,
  wizard,
  wizardHeader,
  wizardHeaderClassic,
  wizardHeaderVertical,
  wizardNav,
  alert,
  errorsList
};
