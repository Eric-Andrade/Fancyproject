import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { LoginService } from '../core/shell/auth/login/login.service';
import { ProductsService } from './products.service';
import { Products } from './products';
import { BrandsService } from '../brands/brands.service';
import { Brands } from '../brands/brands';
import { CategoriesService } from '../categories/categories.service';
import { Categories } from '../categories/categories';
import { ColorsService } from '../colors/colors.service';
import { Colors } from '../colors/colors';
import { SizesService } from '../sizes/sizes.service';
import { Sizes } from '../sizes/sizes';
import { SubcategoriesService } from '../subcategories/subcategories.service';
import { Subcategories } from '../subcategories/subcategories';

@Component({
  selector: 'printmelon-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [ LoginService, ProductsService, BrandsService, CategoriesService, ColorsService, SizesService, SubcategoriesService ]
})
export class ProductsComponent implements OnInit {
    public filterModal: any;
    public products: Products[];
    public productscount: number;
    public filteredProducts: any;
    public brands: Brands[];
    public categories: Categories[];
    public colors: Colors[];
    public sizes: Sizes[];
    public subcategories: Subcategories[];
    public loading: boolean;
    public errorMessage;
    public message: boolean;
    public userFilter: any = { productName: ''};
    public checkedCategories: any;
    public checkedSubcategories: any;
    public checkedBrands: any;
    public checkedSizes: any;
    public checkedColors: any;
    public categoriesFormGroup: FormGroup;
    public subcategoriesFormGroup: FormGroup;
    public brandsFormGroup: FormGroup;
    public sizesFormGroup: FormGroup;
    public colorsFormGroup: FormGroup;
    public selected: any;

    constructor(
        private _productsService: ProductsService,
        private _brandsService: BrandsService,
        private _categoriesservice: CategoriesService,
        private _colorsservice: ColorsService,
        private _sizesservice: SizesService,
        private _subcategoriesservice: SubcategoriesService,
        iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,
        private formBuilder: FormBuilder,
        private _loginService: LoginService) {
        iconRegistry.addSvgIcon(
        'search',
        sanitizer.bypassSecurityTrustResourceUrl('assets/search.svg'));
        iconRegistry.addSvgIcon(
        'filter',
        sanitizer.bypassSecurityTrustResourceUrl('assets/filter.svg'));
        this.loading = true;
        this.message = false;
    }

    ngOnInit() {

        // tslint:disable-next-line:no-shadowed-variable
        const fancyProductDesigner = new FancyProductDesigner($('#fpd'));

        console.log('is customer logged:', this._loginService.getUserLoggedIn());
        this.filterProducts();
        this.getBrands();
        this.getCategories();
        this.getColors();
        this.getSizes();
        this.getSubcategories();

        this.categoriesFormGroup = this.formBuilder.group({
            checkedCategories: this.formBuilder.array([])
        });
        this.subcategoriesFormGroup = this.formBuilder.group({
            onChangeSubcategories: this.formBuilder.array([])
        });
        this.brandsFormGroup = this.formBuilder.group({
            onChangeBrands: this.formBuilder.array([])
        });
        this.sizesFormGroup = this.formBuilder.group({
            onChangeSizes: this.formBuilder.array([])
        });
        this.colorsFormGroup = this.formBuilder.group({
            onChangeColors: this.formBuilder.array([])
        });
    }

    filterProducts() {
       const filters = {
            CategoriesId: [],
            SubCategoriesId: [],
            BrandsId: [],
            MeasurementsId: [],
            GeneralColorId: []
          };

        this._productsService.filterProducts(filters).subscribe(
            result => {
                this.products = result;
                this.productscount = this.products.length;
                if (!this.products) {
                    console.log('Error on filterProducts...');
                }else {
                    console.log(this.productscount);
                    this.loading = false;
                }
            },
            error => {
                this.errorMessage = <any>error;
                if (this.errorMessage != null) {
                    console.log(this.errorMessage);
                    this.message = true;
                }
            }
        );
    }

    getBrands() {
        this._brandsService.getBrands().subscribe(
            result => {
                this.brands = result;
                if (!this.brands) {
                    console.log('Error on getBrands');
                }else {
                    this.loading = false;
                }
            },
            error => {
                this.errorMessage = <any>error;
                if (this.errorMessage != null) {
                    console.log(this.errorMessage);
                    this.message = true;
                }
            }
            );
    }

    getCategories() {
        this._categoriesservice.getCategories().subscribe(
            result => {
                this.categories = result;
                if (!this.categories) {
                    console.log('Error on getCategories');
                }else {
                    this.loading = false;
                }
            },
            error => {
                this.errorMessage = <any>error;
                if (this.errorMessage != null) {
                    console.log(this.errorMessage);
                    this.message = true;
                }
            }
            );
    }

    getColors() {
        this._colorsservice.getColors().subscribe(
            result => {
                this.colors = result;
                if (!this.colors) {
                    console.log('Error on getColors');
                }else {
                    this.loading = false;
                }
            },
            error => {
                this.errorMessage = <any>error;
                if (this.errorMessage != null) {
                    console.log(this.errorMessage);
                    this.message = true;
                }
            }
            );
    }

    getSizes() {
        this._sizesservice.getSizes().subscribe(
            result => {
                this.sizes = result;
                if (!this.sizes) {
                    console.log('Error on getSizes');
                }else {
                    this.loading = false;
                }
            },
            error => {
                this.errorMessage = <any>error;
                if (this.errorMessage != null) {
                    console.log(this.errorMessage);
                    this.message = true;
                }
            }
            );
    }

    getSubcategories() {
        this._subcategoriesservice.getSubcategories().subscribe(
            result => {
                this.subcategories = result;
                if (!this.subcategories) {
                    console.log('Error on getSubcategories');
                }else {
                    this.loading = false;
                }
            },
            error => {
                this.errorMessage = <any>error;
                if (this.errorMessage != null) {
                    console.log(this.errorMessage);
                    this.message = true;
                }
            }
            );
    }

    onChangeCategories(event) {
        this.loading = true;
        const checkedCategories = <FormArray>this.categoriesFormGroup.get('checkedCategories') as FormArray;

        if (event.checked) {
        checkedCategories.push(new FormControl(event.source.value));
        } else {
        const i = checkedCategories.controls.findIndex(x => x.value === event.source.value);
        checkedCategories.removeAt(i);
        }
        const filters = {
            CategoriesId: this.categoriesFormGroup.value.checkedCategories,
            SubCategoriesId: this.subcategoriesFormGroup.value.onChangeSubcategories,
            BrandsId: this.brandsFormGroup.value.onChangeBrands,
            MeasurementsId: this.sizesFormGroup.value.onChangeSizes,
            GeneralColorId: this.colorsFormGroup.value.onChangeColors
        };

        this._productsService.filterProducts(filters)
        .subscribe(
            response => {
                this.products = response;
                this.productscount = this.products.length;
                  if (!this.products) {
                    console.log('Error on filterProducts...');
                }else {
                    console.log(this.productscount);
                    this.loading = false;
                }
            },
            error => {
                console.log(`Error on send data :${JSON.stringify(error.json())}`);
                this.errorMessage = <any>error;
                // if (this.errorMessage != null){
                // }
            }
        );
        // console.log(`onChangeCategories `, this.categoriesFormGroup.value,
        // `onChangeSubcategories`, this.subcategoriesFormGroup.value,
        // `onChangeBrands`, this.brandsFormGroup.value,
        // `onChangeSizes`, this.sizesFormGroup.value,
        // `onChangeColors`, this.colorsFormGroup.value);

    }

    onChangeSubcategories(event) {
        this.loading = true;
        const onChangeSubcategories = <FormArray>this.subcategoriesFormGroup.get('onChangeSubcategories') as FormArray;

        if (event.checked) {
        onChangeSubcategories.push(new FormControl(event.source.value));
        } else {
        const i = onChangeSubcategories.controls.findIndex(x => x.value === event.source.value);
        onChangeSubcategories.removeAt(i);
        }
        const filters = {
            CategoriesId: this.categoriesFormGroup.value.checkedCategories,
            SubCategoriesId: this.subcategoriesFormGroup.value.onChangeSubcategories,
            BrandsId: this.brandsFormGroup.value.onChangeBrands,
            MeasurementsId: this.sizesFormGroup.value.onChangeSizes,
            GeneralColorId: this.colorsFormGroup.value.onChangeColors
        };

        this._productsService.filterProducts(filters)
        .subscribe(
            response => {
                this.products = response;
                this.productscount = this.products.length;
                  if (!this.products) {
                    console.log('Error on filterProducts...');
                }else {
                    console.log(this.productscount);
                    this.loading = false;
                }
            },
            error => {
                console.log(`Error on send data :${JSON.stringify(error.json())}`);
                this.errorMessage = <any>error;
                // if (this.errorMessage != null){
                // }
            }
        );
        // console.log(`onChangeCategories `, this.categoriesFormGroup.value,
        // `onChangeSubcategories`, this.subcategoriesFormGroup.value,
        // `onChangeBrands`, this.brandsFormGroup.value,
        // `onChangeSizes`, this.sizesFormGroup.value,
        // `onChangeColors`, this.colorsFormGroup.value);
    }

    onChangeBrands(event) {
        this.loading = true;
        const onChangeBrands = <FormArray>this.brandsFormGroup.get('onChangeBrands') as FormArray;

        if (event.checked) {
        onChangeBrands.push(new FormControl(event.source.value));
        } else {
        const i = onChangeBrands.controls.findIndex(x => x.value === event.source.value);
        onChangeBrands.removeAt(i);
        }
        const filters = {
            CategoriesId: this.categoriesFormGroup.value.checkedCategories,
            SubCategoriesId: this.subcategoriesFormGroup.value.onChangeSubcategories,
            BrandsId: this.brandsFormGroup.value.onChangeBrands,
            MeasurementsId: this.sizesFormGroup.value.onChangeSizes,
            GeneralColorId: this.colorsFormGroup.value.onChangeColors
        };

        this._productsService.filterProducts(filters)
        .subscribe(
            response => {
                this.products = response;
                this.productscount = this.products.length;
                  if (!this.products) {
                    console.log('Error on filterProducts...');
                }else {
                    console.log(this.productscount);
                    this.loading = false;
                }
            },
            error => {
                console.log(`Error on send data :${JSON.stringify(error.json())}`);
                this.errorMessage = <any>error;
                // if (this.errorMessage != null){
                // }
            }
        );
        // console.log(`onChangeCategories `, this.categoriesFormGroup.value,
        // `onChangeSubcategories`, this.subcategoriesFormGroup.value,
        // `onChangeBrands`, this.brandsFormGroup.value,
        // `onChangeSizes`, this.sizesFormGroup.value,
        // `onChangeColors`, this.colorsFormGroup.value);
    }

    onChangeSizes(event) {
        this.loading = true;
        const onChangeSizes = <FormArray>this.sizesFormGroup.get('onChangeSizes') as FormArray;

        if (event.checked) {
        onChangeSizes.push(new FormControl(event.source.value));
        } else {
        const i = onChangeSizes.controls.findIndex(x => x.value === event.source.value);
        onChangeSizes.removeAt(i);
        }
        const filters = {
            CategoriesId: this.categoriesFormGroup.value.checkedCategories,
            SubCategoriesId: this.subcategoriesFormGroup.value.onChangeSubcategories,
            BrandsId: this.brandsFormGroup.value.onChangeBrands,
            MeasurementsId: this.sizesFormGroup.value.onChangeSizes,
            GeneralColorId: this.colorsFormGroup.value.onChangeColors
        };

        this._productsService.filterProducts(filters)
        .subscribe(
            response => {
                this.products = response;
                this.productscount = this.products.length;
                  if (!this.products) {
                    console.log('Error on filterProducts...');
                }else {
                    console.log(this.productscount);
                    this.loading = false;
                }
            },
            error => {
                console.log(`Error on send data :${JSON.stringify(error.json())}`);
                this.errorMessage = <any>error;
                // if (this.errorMessage != null){
                // }
            }
        );
        // console.log(`onChangeCategories `, this.categoriesFormGroup.value,
        // `onChangeSubcategories`, this.subcategoriesFormGroup.value,
        // `onChangeBrands`, this.brandsFormGroup.value,
        // `onChangeSizes`, this.sizesFormGroup.value,
        // `onChangeColors`, this.colorsFormGroup.value);
    }

    onChangeColors(event) {
        this.loading = true;
        const onChangeColors = <FormArray>this.colorsFormGroup.get('onChangeColors') as FormArray;

        if (event.checked) {
        onChangeColors.push(new FormControl(event.source.value));
        } else {
        const i = onChangeColors.controls.findIndex(x => x.value === event.source.value);
        onChangeColors.removeAt(i);
        }
        const filters = {
            CategoriesId: this.categoriesFormGroup.value.checkedCategories,
            SubCategoriesId: this.subcategoriesFormGroup.value.onChangeSubcategories,
            BrandsId: this.brandsFormGroup.value.onChangeBrands,
            MeasurementsId: this.sizesFormGroup.value.onChangeSizes,
            GeneralColorId: this.colorsFormGroup.value.onChangeColors
        };

        this._productsService.filterProducts(filters)
        .subscribe(
            response => {
                this.products = response;
                this.productscount = this.products.length;
                  if (!this.products) {
                    console.log('Error on filterProducts...');
                }else {
                    console.log(this.productscount);
                    this.loading = false;
                }
            },
            error => {
                console.log(`Error on send data :${JSON.stringify(error.json())}`);
                this.errorMessage = <any>error;
                // if (this.errorMessage != null){
                // }
            }
        );
        // console.log(`onChangeCategories `, this.categoriesFormGroup.value,
        // `onChangeSubcategories`, this.subcategoriesFormGroup.value,
        // `onChangeBrands`, this.brandsFormGroup.value,
        // `onChangeSizes`, this.sizesFormGroup.value,
        // `onChangeColors`, this.colorsFormGroup.value);
    }

    submit() {

    }
}
